import Link from "next/link";
import {
  HomeIcon,
  AcademicCapIcon,
  UsersIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  MegaphoneIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: HomeIcon,
        label: "Home",
        href: "/",
      },
      {
        icon:AcademicCapIcon ,
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: UsersIcon,
        label: "Students",
        href: "/students",
      },
      {
        icon: UserGroupIcon,
        label: "Parents",
        href: "/parents",
      },
      {
        icon: BuildingOffice2Icon,
        label: "Classes",
        href: "/classes",
      },
      {
        icon: BookOpenIcon,
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: ClipboardDocumentCheckIcon,
        label: "Exams",
        href: "/exams",
      },
      {
        icon: DocumentTextIcon,
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: CheckBadgeIcon,
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: "/calender.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: MegaphoneIcon,
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },

  {
    title: "OTHER",
    items: [
      {
        icon: UserCircleIcon,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: Cog6ToothIcon,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: ArrowRightOnRectangleIcon,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm text-black">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-3" key={i.title}>

          <span className = "hidden lg:block text-pink-800 font-light my-4">{i.title}</span>

          {i.items.map((item) => (
            <Link href={item.href} key={item.label} className ="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
             {typeof item.icon === "string" ? (
               <img src={item.icon} alt="" width={20} height={20} />
             ) : (
               <item.icon className="w-5 h-5" />
             )}

             <span className="hidden lg:block">{item.label}</span>

            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
