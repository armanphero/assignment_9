import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FilteredJobsContext } from './AppliedJobs'
import { AppliedJobsContext } from '../App'

const MyDropdown = () => {
    const [appliedJobs] = useContext(AppliedJobsContext);
    const [setFilteredJobs] = useContext(FilteredJobsContext);
    const filterAppliedJobs = (filter) => {
        const newFilteredJobs = appliedJobs.filter(job => job.remoteOrOnsite === filter);
        setFilteredJobs(newFilteredJobs);
    }
    return (
        <div className="text-right mb-5">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Filter By
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 text-gray-800"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div>
                            <Menu.Item>
                                <button className='w-[100%] text-left font-medium p-2 hover:bg-gray-100' onClick={() => filterAppliedJobs('Remote')}>Remote</button>
                            </Menu.Item>
                        </div>
                        <div>
                            <Menu.Item>
                                <button className='w-[100%] text-left font-medium p-2 hover:bg-gray-100' onClick={() => filterAppliedJobs('Onsite')}>Onsite</button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


export default MyDropdown;