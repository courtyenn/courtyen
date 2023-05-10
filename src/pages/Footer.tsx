export const Footer = () => {

  return (
    <div className="grid-area-footer text-white-700 flex items-center">
      <span className="shrink">© 2023 Courtyen LLC</span>
      <span className="flex ml-auto hover:text-purple-900 text-pink-700 shrink">
        <a href="mailto:hello@courtyen.io"><span className="icon-paper-plane"></span> Email me</a>
      </span>
    </div>
  )
}