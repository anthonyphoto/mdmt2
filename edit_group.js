'use strict';
// PLEASE EDIT ONLY CONTENT PORTION BELOW (INSIDE OF DOUBLE QUOTATION "")

const COMMON = {

  // Title shown on the browser tab, not in content
  title: "Mindful Moving Study", 
  
  // Default header content - font is big - do not make it too long
  header1: "Hi",
  header2: "Ready to Dance?",
  header3: "Let's have some fun today",

  // Zoom Link
  zoomLink: "https://www.cnn.com/",

  // Contact info for Help
  phone: "215-496-9650",
  email: "mbmresearch@drexel.edu",

  // admin id
  id: "admin",
};

const GROUP_A = {
  // please update this once you complete a session
  lastSession: "5",

  showDailyPractice: "yes", // yes or no

  group_message: [
    { 
      show: "yes",
      date: "Apr 25, 2022",
      message: "Reminder: You have a Live Class scheduled for Tuesday, April 25th at 10am.",
      link: "https://zoom.us/",
    },
    {
      show: "yes",
      date: "Apr 16, 2022",
      message: "Please check your email and finish the survey.",
      link: "",
    },  
    { 
      show: "yes",
      date: "Apr 06, 2022",
      message: "The first class went well. Kudos to all!! &nbsp;&nbsp;&nbsp;&nbsp; <img width='180' src='./img/_praise.gif'>",
      link: "",
    },
  ],

  // non-member message won't show on individual page
  nonmember_message: [
    { 
      show: "yes",
      date: "Apr 05, 2022",
      message: `This is not your individual page.  If you want to access your own page, please contact for help below <a id='js-login-link' onclick='openHelp()'><font color='#C00000'>Need Help!</a></font></a>`,        
      link: "",
    },  
  ],
  
  // Meeting schedule
  schedule: [
    {
      session: 1,
      date: "Apr 05, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 2,
      date: "Apr 12, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 3,
      date: "Apr 19, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 4,
      date: "Apr 26, 2022",
      title: "Let's meet at 10am",
      exercise: "",
    },
    {
      session: 5,
      date: "May 03, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 6,
      date: "May 10, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 7,
      date: "May 17, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 8,
      date: "May 24, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 9,
      date: "May 31, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 10,
      date: "Jun 07, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 11,
      date: "Jun 14, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
    {
      session: 12,
      date: "Jun 21, 2022",
      title: "Let's meet at 10am",
      exercise: "https://player.vimeo.com/video/399771453",
    },
  ],
};
