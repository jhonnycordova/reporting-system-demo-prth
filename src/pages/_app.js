import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

function Loading({children, id}) {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered text-center justify-content-center">
        <div className="spinner-grow m-1 text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow m-1 text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow m-1 text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

class LoadingHelper {
  constructor() {
    this._loading = false;
  }

  setElement(element) {
    if(this._element) throw new Error('element already exists');
    this._element = element;
    if(this._loading) {
      this.show();
    }
  }

  hasElement() {
    return !!this._element;
  }

  show() {
    this._loading = true;

    const element = this._element;
    if(!element) return;
    element.style.display = 'block';
    element.scrollTop = 0;
    element.classList.add('show');
  }

  hide() {
    this._loading = false;

    const element = this._element;
    if(!element) return;
    element.style.display = 'none';
    element.classList.remove('show');
  }
}

let helper;
function getLoadingHelper() {
  if(!helper) helper = new LoadingHelper();

  return helper;
}

function MenuItem({children, onClick, href, query = {}}) {
  return (
    <li>
      <Link href={{pathname: href, query }} onClick={onClick}  className="link-dark rounded">
        {children}
      </Link>
    </li>
  );
}

function TopLevelMenuItem({text, href}) {
  return (
    <li className="mb-1">
      <Link href={href} className="link-dark btn btn-menu align-items-center rounded">
        {text}
      </Link>
    </li>
  );
}

function CollapsibleMenuItem({children, name, text, expanded}) {
  return (
    <li className="mb-1">
      <button className="btn btn-menu btn-toggle-arrow align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={`#${name}-collapse`} aria-expanded={expanded}>
        {text}
      </button>
      <div className={`collapse ${expanded?'show':''}`} id={`${name}-collapse`}>
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {children}
        </ul>
      </div>
    </li>
  );
}


function DefaultLayout({ children }) {

  const [sourceExpanded, setSourceExpanded] = useState(false);
  const [destinationExpanded, setDestinationExpanded] = useState(false);
  const [etlExpanded, setEtlExpanded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.startsWith('/source')) {
      setSourceExpanded(true);
    } else {
      setSourceExpanded(false);
    }
    if (router.pathname.startsWith('/destination')) {
      setDestinationExpanded(true);
    } else {
      setDestinationExpanded(false);
    }
    if (router.pathname.startsWith('/etl')) {
      setEtlExpanded(true);
    } else {
      setEtlExpanded(false);
    }

  }, [router]);
  const headerClass = `navbar navbar-dark sticky-top bg-success flex-md-nowrap p-0 shadow`;
  return (
    <>
      <header className={headerClass}>
        <Link href="/" className="navbar-brand col-sm-3 col-lg-2 me-0 px-3">
          Reporting System Demo
        </Link>
        <button className="navbar-toggler position-absolute d-sm-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <span className='me-5 text-white small'>
          User Name
        </span>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-lg-2 bg-light">
            <div id="sidebarMenu" className={`flex-shrink-0 bg-white d-sm-block col-sm-3 col-lg-2 bg-light sidebar collapse`}>
            <ul className="list-unstyled ps-0 pt-5">
              <TopLevelMenuItem href="/" text="Home" />
              <CollapsibleMenuItem text="Reports" name="report" expanded={etlExpanded}>
                <MenuItem href="/report/new">Report Builder</MenuItem>
                <MenuItem href="/report/list">List</MenuItem>
              </CollapsibleMenuItem>
              <li className="border-top my-3"></li>
              <CollapsibleMenuItem text="Projects" name="project" expanded={destinationExpanded}>
                  <MenuItem href="/project/new">Create Project</MenuItem>
                  <MenuItem href="/project/list">List</MenuItem>
              </CollapsibleMenuItem>
              <CollapsibleMenuItem text="Users" name="user" expanded={destinationExpanded}>
                  <MenuItem href="/user/new">Create User</MenuItem>
                  <MenuItem href="/user/list">List</MenuItem>
              </CollapsibleMenuItem>
              <li className="border-top my-3"></li>
              <CollapsibleMenuItem text="Account" name="account">
                <MenuItem href="#" onClick={()=>{}}>Sign out</MenuItem>
              </CollapsibleMenuItem>
            </ul>
          </div>
          </div>
          
          <main className="col-sm-9 ms-sm-auto col-lg-10 px-md-4 pt-3">{children}</main>
        </div>
      </div>
    </>
  );
}

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.min').then((bootstrap) => {
      //window.bootstrap = bootstrap;
      //window.__globalLoadingModal = new bootstrap.Modal('#gobalLoadingOverlay', {
      //  keyboard: false, backdrop: false
      //});
      const helper = getLoadingHelper();
      // because React.Strict mode is on
      if(!helper.hasElement())
        helper.setElement(document.getElementById('gobalLoadingOverlay'));
    });
  },[]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reporting System Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <Loading id="gobalLoadingOverlay"/>
    </>
  );
}
