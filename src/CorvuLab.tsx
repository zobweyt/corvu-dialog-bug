import { createEffect, createSignal, type VoidComponent } from 'solid-js'
import Dialog from '@corvu/dialog'

const DialogExample: VoidComponent = () => {
  const [selectedItem, setSelectedItem] = createSignal<string | null>(null)

  createEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedItem())
  })

  return (
    <>
      <button
        onPointerDown={() => setSelectedItem('item')}
        class="my-auto rounded-lg bg-corvu-100 px-4 py-3 text-lg font-medium transition-all duration-100 hover:bg-corvu-200 active:translate-y-0.5 slide-in-from-top-2"
      >
        Item
      </button>

      <Dialog
        open={selectedItem() !== null}
        onOpenChange={(open) => !open && setSelectedItem(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50 data-open:animate-in data-open:fade-in-0% data-closed:animate-out data-closed:fade-out-0%" />
          <Dialog.Content class="fixed left-1/2 top-1/2 z-50 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 data-open:animate-in data-open:fade-in-0% data-open:zoom-in-95% data-open:slide-in-from-top-10% data-closed:animate-out data-closed:fade-out-0% data-closed:zoom-out-95% data-closed:slide-out-to-top-10%">
            <Dialog.Label class="text-lg font-bold">
              Are you sure to select this item?
            </Dialog.Label>
            <Dialog.Description class="mt-2">Enter "yes"</Dialog.Description>
            <textarea class="mt-3 w-full rounded-sm border-2 border-corvu-400 bg-corvu-100 focus:outline-hidden" />
            <div class="mt-3 flex justify-between">
              <Dialog.Close class="rounded-md bg-corvu-200 px-3 py-2">
                Cancel
              </Dialog.Close>
              <Dialog.Close class="rounded-md bg-corvu-300 px-3 py-2 font-bold">
                Submit
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>
  )
}

export default DialogExample
