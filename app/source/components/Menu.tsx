const menuItems = [
    {
        title:"MENU",
        items:[
            {
                icon:"/home.png",
                lable:"Home",
                href:"/",
            },
            {
                icon:"/teacher.png",
                label:"Teachers",
                href:"/teachers",
            },
            {
               icon:"/students.png",
               label:"Students",
               href:"/students", 
            },
            {
                icon:"/parents.png",
                label:"Parents",
                href:"/parents",
            },
            {
                icon:"/class.png",
                label:"Classes",
                href:"/classes",
            },
            {
                icon:"/lesson.png",
                label:"Lessons",
                href:"/lessons",
            },
            {
                icon:"/exams.png",
                label:"Exams",
                href:"/exams",
            },
            {
                icon:"/assignment.png",
                label:"Assignments",
                href:"/assignments",
            },
            {
                icon:"/attendance.png",
                label:"Attendance",
                href:"/attendance"
            },
            {
                icon:"/calender.png",
                lable:"Events",
                href:"/events",
            },
            {
                icon:"/announcement.png",
                lable:"Announcements",
                href:"/announcements",
            },
          
        ],
    },

    {
        title:"OTHER",
        items:[
            {
                icons:"/profile.png",
                label:"Profile",
                href:"/profile",
            },
            {
                icon:"/settings.png",
                label:"Settings",
                href:"/settings",
            },
            {
                icon:"/logout.png",
                label:"Logout",
                href:"/logout",
            },
        ],
    },
];


const Menu = ()=>{
    return(
        <div className = "">Menu</div>
    )
}

export default Menu;