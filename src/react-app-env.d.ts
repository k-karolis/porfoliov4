/// <reference types="react-scripts" />
declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.m4v" {
  const src: string;
  export default src;
}

// declare module "react-hover-video-player" {
//   const videoSrc: string;
//   export default videoSrc;
// }

// // declare namespace JSX {
// //   interface IntrinsicAttributes {
// //     videoSrc: any;
// //   }
// //   interface IntrinsicAttributes {
// //     pausedOverlay: any;
// //   }
// //   interface IntrinsicAttributes {
// //     loadingOverlay: any;
// //   }
// // }
