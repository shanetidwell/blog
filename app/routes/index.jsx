export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <nav className={'py-8 px-8 flex flex-row justify-between'}>
          <div>
              <a className={'text-3xl'}
                  target="_blank"
                  href="/"
                  rel="noreferrer"
              >
                  <h1>Shane Tidwell</h1>
              </a>
          </div>
          <ul className={'flex flex-row justify-end text-lg'}>
            <li className={'mr-8'}>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
              <li>
                  <a
                      target="_blank"
                      href="https://remix.run/tutorials/blog"
                      rel="noreferrer"
                  >
                      Resume
                  </a>
              </li>
          </ul>
      </nav>
        <div className={'pt-24'}>
        <h2 className={'text-5xl flex justify-center'}>
            I love to build things with javascript
        </h2>

        </div>

    </div>
  );
}
