'use strict';
// PLEASE EDIT ONLY CONTENT PORTION BELOW (INSIDE OF DOUBLE QUOTATION "")

/*
 * show: corresponding message will show only "yes"  "no" will suppress.
 * id: don't change this
 * absence: list of sequence # e.g., [2, 8] - member was absent on 2nd and 8th meeting
 */

const MEMBER_A = [
  {
    name: "Minjung Shim",
    id: "4669", 
    image: "f1",
    absence: [],
    message: [
      {
        show: "yes",
        date: "May 04, 2022",
        message: "Minjung, you attended all sessions.  Keep up the good work!",
        link: "",
      },
      {
        show: "yes",
        date: "Apr 30, 2022",
        message: "Minjung, it looks like you did not complete the survey. Please check your email that we sent on Apr 16 and complete the survey.  Thank you :-)",
        link: "",
      },
    ],
  },
  {
    name: "Anthony Kim",
    id: "0e1c", 
    image: "m1",
    absence: [1, 2, 5],
    message: [
      {
        show: "yes",
        date: "MAY 04, 2022",
        message: "You missed the live sessions more than twice. If you have difficulty joining the sessions, please click below for help. <a id='js-login-link' onclick='openHelp()'><font color='#C00000'>Need Help!</a></font></a>. Thank you",
        link: "",
      },
      {
        show: "yes",
        date: "May 03, 2022",
        message: "Happy birthday, Anthony!  I hope you have a great day.<img src='./img/bday-dance.gif'>",
        link: "",
      },
    ],
  },
  {
    name: "John Doe",
    id: "d40a", 
    image: "m2",
    absence: [3],
    message: [
      {
        show: "yes",
        date: "Apr 30, 2022",
        message: "This is a personal message to John. It looks like you did not complete the survey. Please check your email that we sent on Apr 16 and complete the survey.  Thank you :-)",
        link: "",
      },
    ],
  },
  {
    name: "Michael Jackson",
    id: "faae", 
    image: "m1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Julia Roberts",
    id: "3c7c", 
    image: "f1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Bill Murray",
    id: "8098", 
    image: "m1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Michelle Obama",
    id: "fe9a", 
    image: "f1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Tom Cruise",
    id: "23cc", 
    image: "m2",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Harrison Ford",
    id: "b1e7", 
    image: "m1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },
  {
    name: "Celine Dion",
    id: "020b", 
    image: "f1",
    absence: [],
    message: [
      {
        show: "no",
        date: "Apr 30, 2022",
        message: "This is a personal message",
        link: "",
      },
    ],
  },

];