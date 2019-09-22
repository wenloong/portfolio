import React from 'react';

export class Link extends React.PureComponent {
   render() {
      return(
         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M56.0279 3.97554C50.7306 -1.32405 42.1067 -1.32631 36.8071 3.97554L26.396 14.3867C25.9531 14.8295 25.9531 15.5454 26.396 15.9882C26.8388 16.4311 27.5547 16.4311 27.9975 15.9882L38.4087 5.57708C40.538 3.44773 43.382 2.27546 46.4164 2.27546C49.4529 2.27546 52.2958 3.44886 54.4252 5.57821C56.5545 7.70755 57.7279 10.5516 57.7279 13.587C57.7279 16.6225 56.5545 19.4654 54.4252 21.5947L40.8121 35.2112C36.3971 39.6262 29.2094 39.6262 24.7933 35.2112C24.3504 34.7684 23.6346 34.7684 23.1918 35.2112C22.7489 35.6541 22.7489 36.3699 23.1918 36.8128C25.8421 39.462 29.3216 40.7872 32.8021 40.7872C36.2827 40.7872 39.7633 39.462 42.4125 36.8128L56.0279 23.1963C58.5853 20.6388 59.9943 17.2262 59.9943 13.5859C59.9943 9.94563 58.5853 6.53302 56.0279 3.97554Z" fill="black"/>
            <path d="M30.3999 45.6212L21.5903 54.4308C19.461 56.5602 16.6169 57.7336 13.5815 57.7336C10.546 57.7336 7.70313 56.5602 5.57265 54.4308C1.15766 50.0158 1.15766 42.8293 5.57265 38.4131L18.3872 25.5986C22.8034 21.1836 29.9899 21.1858 34.4049 25.5986C34.8478 26.0414 35.5636 26.0414 36.0065 25.5986C36.4493 25.1557 36.4493 24.4399 36.0065 23.997C30.7091 18.6974 22.0853 18.6952 16.7857 23.997L3.96998 36.8127C1.4125 39.3702 0.00463867 42.7828 0.00463867 46.4231C0.00463867 50.0634 1.41363 53.476 3.97111 56.0324C6.52859 58.5887 9.94121 59.9988 13.5804 59.9988C17.2218 59.9988 20.6344 58.5898 23.1907 56.0324L32.0003 47.2227C32.4432 46.7799 32.4432 46.0641 32.0003 45.6212C31.5575 45.1783 30.8428 45.1795 30.3999 45.6212Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
         </svg>
      )
   }
}

export class NoLink extends React.PureComponent {
   render() {
      return(
         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M56.0279 3.97554C50.7306 -1.32405 42.1067 -1.32631 36.8071 3.97554L26.396 14.3867C25.9531 14.8295 25.9531 15.5454 26.396 15.9882C26.8388 16.4311 27.5547 16.4311 27.9975 15.9882L38.4087 5.57708C40.538 3.44773 43.382 2.27546 46.4164 2.27546C49.4529 2.27546 52.2958 3.44886 54.4252 5.57821C56.5545 7.70755 57.7279 10.5516 57.7279 13.587C57.7279 16.6225 56.5545 19.4654 54.4252 21.5947L40.8121 35.2112C36.3971 39.6262 29.2094 39.6262 24.7933 35.2112C24.3504 34.7684 23.6346 34.7684 23.1918 35.2112C22.7489 35.6541 22.7489 36.3699 23.1918 36.8128C25.8421 39.462 29.3216 40.7872 32.8021 40.7872C36.2827 40.7872 39.7633 39.462 42.4125 36.8128L56.0279 23.1963C58.5853 20.6388 59.9943 17.2262 59.9943 13.5859C59.9943 9.94563 58.5853 6.53302 56.0279 3.97554Z" fill="black"/>
            <path d="M30.3999 45.6212L21.5903 54.4308C19.461 56.5602 16.6169 57.7336 13.5815 57.7336C10.546 57.7336 7.70313 56.5602 5.57265 54.4308C1.15766 50.0158 1.15766 42.8293 5.57265 38.4131L18.3872 25.5986C22.8034 21.1836 29.9899 21.1858 34.4049 25.5986C34.8478 26.0414 35.5636 26.0414 36.0065 25.5986C36.4493 25.1557 36.4493 24.4399 36.0065 23.997C30.7091 18.6974 22.0853 18.6952 16.7857 23.997L3.96998 36.8127C1.4125 39.3702 0.00463867 42.7828 0.00463867 46.4231C0.00463867 50.0634 1.41363 53.476 3.97111 56.0324C6.52859 58.5887 9.94121 59.9988 13.5804 59.9988C17.2218 59.9988 20.6344 58.5898 23.1907 56.0324L32.0003 47.2227C32.4432 46.7799 32.4432 46.0641 32.0003 45.6212C31.5575 45.1783 30.8428 45.1795 30.3999 45.6212Z" fill="black"/>
            <line x1="1.70711" y1="1.29289" x2="58.7071" y2="58.2929" stroke="black" stroke-width="2"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
         </svg>
      )
   }
}