import { SimpleFunction } from 'src/shims'

type ListenName = string | symbol
type Listener = (SimpleFunction & { fn? : any})

export type PlainEvent = ReturnType<typeof createPlainEvent>



export function createPlainEvent (){
  let getListenMap = (() => {
    let events: Map<ListenName, Listener[]>
    return () => {
      if(!events) {
        events = new Map<ListenName, Listener[]>()
      }
      return events
    }
  })()

  const event = {
    on: (listenName: ListenName, fn: SimpleFunction) => {
      const listenMap = getListenMap()
      const map = listenMap.get(listenName)
      if (!!map) {
          map.push(fn)
      } else {
          listenMap.set(listenName, [fn])
      }
      return () => event.off(listenName, fn)
    },
    off: (listenName: ListenName, fn?: SimpleFunction) => {
      const listenMap = getListenMap()

      const listeners = listenMap.get(listenName)
      if (!listeners) {
          return;
      }

      /*移除listenName的所有监听器*/
      if (!fn) {
          listenMap.set(listenName, [])
          return
      }

      for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i];
          if (fn === listener || (!!listener.fn && fn === listener.fn)) {
              listeners.splice(i, 1)
              break
          }
      }
    },
    emit: (listenName: ListenName, ...args: any[]) => {
      const listeners = getListenMap().get(listenName)
      if (!!listeners) {
          listeners.forEach(listener => listener(...args))
      }
    },
    once: (listenName: ListenName, fn: SimpleFunction) => {
      const on: Listener = (...args: any[]) => {
          event.off(listenName, fn)
          fn(...args)
      }
      on.fn = fn
      event.on(listenName, on)
      return () => event.off(listenName, on)
    },
  }

  return event
}