import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="lg:flex lg:items-start lg:justify-end h-40 bg-cover" style={{ backgroundImage: 'url(./img/nav-bg.png)' }}>
            <div className="min-w-0 flex-1">
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 justify-end">
                    <div className="mt-2 flex items-center text-sm text-black">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-black">
                        <Link to='/artists'>Artists</Link>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-black">
                        <Link to='/precheck-list'>Pre-Check List</Link>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-black">
                        <Link to='/aftercare'>After Care</Link>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-black">
                        <Link to='/faq'>FAQ's</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
