export default defineAppConfig({
    ui: {
        card: {
            background: 'bg-white dark:bg-[#171717]',
            ring: 'ring-1 ring-gray-200 dark:ring-[#252525]'
        },
        alert: {
            title: 'text-sm font-medium',
            description: 'mt-1 text-xs leading-4 opacity-90 tracking-wider',
            padding: 'px-4 py-3'
        },
        notification : {
            default: {
                color: 'primary',
                icon: null,
                timeout: 5000,
                closeButton: {
                  icon: 'i-heroicons-x-mark-20-solid',
                  color: 'gray',
                  variant: 'link',
                  padded: false,
                },
                actionButton: {
                  size: 'xs',
                  color: 'white',
                },
              },
        }
    }
})