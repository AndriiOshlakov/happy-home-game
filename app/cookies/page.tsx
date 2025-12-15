'use client';

import { useRouter } from 'next/navigation';
import css from './Cookies.module.css';
import Link from 'next/link';

export default function Cookies() {
  const router = useRouter();

  return (
    <section className={css.cookies}>
      <div className={css.cookiesContainer}>
        <button className={css.button} onClick={() => router.push('/')}>
          <svg
            width={8}
            height={14}
            className={css.mob}
            style={{ stroke: 'black', fill: 'transparent' }}
          >
            <use href="/symbol-defs.svg#icon" />
          </svg>
          <svg width={24} height={24} className={css.desk}>
            <use href="/symbol-defs.svg#back" />
          </svg>
          <p>Go to Home</p>
        </button>
        <h1>Cookies Policy</h1>
        <p>Last updated: February 04, 2025</p>
        <br />
        <p>
          This Cookies Policy explains what Cookies are and how We use them. You should read this
          policy so You can understand what type of cookies We use, or the information We collect
          using Cookies and how that information is used.
        </p>
        <br />
        <p>
          Cookies do not typically contain any information that personally identifies a user, but
          personal information that we store about You may be linked to the information stored in
          and obtained from Cookies. For further information on how We use, store and keep your
          personal data secure, see our Privacy Policy.
        </p>
        <br />
        <p>
          We do not store sensitive personal information, such as mailing addresses, account
          passwords, etc. in the Cookies We use.
        </p>
        <br />
        <strong>Interpretation and Definitions</strong>
        <br />
        <strong>Interpretation</strong>
        <br />
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </p>
        <br />
        <strong>Definitions</strong>
        <br />
        <p>For the purposes of this Cookies Policy:</p>
        <br />
        <ul>
          <li>
            Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies
            Policy) refers to Star Force.
          </li>
          <li>
            Cookies means small files that are placed on Your computer, mobile device or any other
            device by a website, containing details of your browsing history on that website among
            its many uses.
          </li>
          <li>
            Website refers to Star Force, accessible from
            <Link href="https://www.freeprivacypolicy.com/" style={{ textDecoration: 'underline' }}>
              fusionstarforce.com
            </Link>
          </li>
          <li>
            You means the individual accessing or using the Website, or a company, or any legal
            entity on behalf of which such individual is accessing or using the Website, as
            applicable.
          </li>
        </ul>
        <strong>The use of the Cookies</strong>
        <br />
        <strong>Type of Cookies We Use</strong>
        <br />
        <p>
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your
          personal computer or mobile device when You go offline, while Session Cookies are deleted
          as soon as You close your web browser.
        </p>
        <br />
        <p>We use both session and persistent Cookies for the purposes set out below:</p>
        <br />
        <ul>
          <li>
            <strong style={{ marginBottom: '16px' }}>Necessary / Essential Cookies</strong>
            <p>Type: Session Cookies</p>
            <br />
            <p>Administered by: Us</p>
            <br />
            <p>
              Purpose: These Cookies are essential to provide You with services available through
              the Website and to enable You to use some of its features. They help to authenticate
              users and prevent fraudulent use of user accounts. Without these Cookies, the services
              that You have asked for cannot be provided, and We only use these Cookies to provide
              You with those services.
            </p>
          </li>
          <br />
          <li>
            <strong style={{ marginBottom: '16px' }}>Functionality Cookies</strong>
            <p>Type: Persistent Cookies</p>
            <br />
            <p>Administered by: Us</p>
            <br />
            <p>
              Purpose: These Cookies allow us to remember choices You make when You use the Website,
              such as remembering your login details or language preference. The purpose of these
              Cookies is to provide You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </p>
          </li>
        </ul>
        <br />
        <strong>Your Choices Regarding Cookies</strong>
        <br />
        <p>
          If You prefer to avoid the use of Cookies on the Website, first You must disable the use
          of Cookies in your browser and then delete the Cookies saved in your browser associated
          with this website. You may use this option for preventing the use of Cookies at any time.
        </p>
        <br />
        <p>
          If You do not accept Our Cookies, You may experience some inconvenience in your use of the
          Website and some features may not function properly.
        </p>
        <br />
        <p>
          If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies,
          please visit the help pages of your web browser.
        </p>
        <br />
        <ul>
          <li>
            For the Chrome web browser, please visit this page from Google:
            <Link
              style={{ textDecoration: 'underline' }}
              href="https://support.google.com/accounts/answer/32050"
            >
              https://support.google.com
              <br />
              /accounts/answer/32050
            </Link>
          </li>
          <li>
            For the Internet Explorer web browser, please visit this page from Microsoft:
            <Link
              style={{ textDecoration: 'underline' }}
              href="https://support.microsoft.com/ru-RU/help/278835"
            >
              http://support.microsoft.com
              <br />
              /kb/278835
            </Link>
          </li>
          <li>
            For the Firefox web browser, please visit this page from Mozilla:
            <Link
              style={{ textDecoration: 'underline' }}
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
            >
              https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
            </Link>
          </li>
          <li>
            For the Safari web browser, please visit this page from Apple:
            <Link
              href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
              style={{ textDecoration: 'underline' }}
            >
              https://support.apple.com
              <br />
              /guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </Link>
          </li>
        </ul>
        <p>For any other web browser, please visit your web browser's official web pages.</p>
        <br />
        <strong>More Information about Cookies</strong>
        <br />
        <p>
          You can learn more about cookies:
          <Link
            href="https://www.freeprivacypolicy.com/blog/cookies/"
            style={{ textDecoration: 'underline' }}
          >
            Cookies: What Do They Do?
          </Link>
          Cookies: What Do They Do?.
        </p>
        <br />
        <strong>Contact Us</strong>
        <br />
        <p>If you have any questions about this Cookies Policy, You can contact us:</p>
        <br />
        <ul>
          <li>By email: info@fusionstarforce.com</li>
        </ul>
      </div>
    </section>
  );
}
