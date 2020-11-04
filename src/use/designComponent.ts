import type {
  ComponentPropsOptions, ExtractPropTypes, SetupContext,
} from 'vue';

import {
  defineComponent, getCurrentInstance, provide, inject,
} from 'vue';

export default function designComponent <
  PropsOptions extends Readonly<ComponentPropsOptions>,
  Props extends Readonly<ExtractPropTypes<PropsOptions>>,
  Refer
>(
  options: {
    name?: string,
    props?: PropsOptions,
    provideRefer?: boolean,
    setup: (props: Props, setupContext: SetupContext) => {
        refer?: Refer,
        render: () => any
    }
},
) {
  const { setup, provideRefer, props, name } = options;
  return {
    ...defineComponent({
      props,
      name,
      setup(props: Props, setupContext: SetupContext) {
        const ctx = getCurrentInstance() as any;

        if (!setup) {
          console.error('designComponent: setup is required!');
          return () => null;
        }

        const { refer, render } = setup(props, setupContext);
        if (!!refer) {
          const duplicateKey = Object.keys(props || {})
              .find(i => Object.prototype.hasOwnProperty.call(refer as any, i))
          if (!!duplicateKey) {
              console.error(`designComponent: duplicate key ${duplicateKey} in refer`)
          } else {
              Object.assign(ctx.proxy, refer)
          }
      }

        if (provideRefer) {
          if (!name) {
            console.error('designComponent: name is required when provideRefer is true!');
          } else {
            provide(`@@${name}`, refer);
          }
        }

        return render;
      },
    } as any),
    use: {
      ref: (refName: string) => {
        const ctx = getCurrentInstance()!
        return {
          get value() {
              return ctx.refs[refName] as Refer | null
          }
        }
      },
      inject: (defaultValue?: any) => inject(`@@${name}`, defaultValue) as Refer,
    },
  };
}
