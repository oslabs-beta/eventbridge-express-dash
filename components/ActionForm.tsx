import { Tab } from '@headlessui/react'
import { CodeIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const services = [
    'Orders',
    'Payments',
    'Shipping',
]

export default function Example() {
  return (
    <form action="#">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.List className="flex items-center">
                { services.map((service: string) => {
                    return (
                        <Tab
                            key={service}
                            className={({ selected }) =>
                            classNames(
                                selected
                                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                                'px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
                            )
                        }
                        >
                            { service }
                        </Tab>
                    )
                })}
              {/* These buttons are here simply as examples and don't actually do anything. */}
                <div className="ml-auto flex items-center space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert code</span>
                      <CodeIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
            </Tab.List>
            <Tab.Panels className="mt-2">
              {services.map((service) => {
                return (
                  <Tab.Panel className="p-0.5 -m-0.5 rounded-lg" key={service}>
                    <label htmlFor={service} className="sr-only">
                      { service }
                    </label>
                    <div>
                      <textarea
                        rows={5}
                        name={service}
                        id={service}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter JSON Payload"
                        defaultValue={''}
                      />
                    </div>
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          POST
        </button>
      </div>
    </form>
  )
}
