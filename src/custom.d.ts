// Create-React-App has some annoying issues
// regarding the import of assets. Add support for .mp4 here.
declare module '*.mp4' {
  const src: string;
  export default src;
}
