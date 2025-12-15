'use client';

import Link from 'next/link';
import css from './Privacy.module.css';
import { useRouter } from 'next/navigation';

export default function Privacy() {
  const router = useRouter();
  return (
    <section className={css.privacy}>
      <div className={css.privacyContainer}>
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
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated: </strong>2025-08-01.
        </p>
        <p>
          This Privacy Policy applies to the designwuca.pro website (hereinafter referred to as
          "Website"). By accessing or using our services, you agree to the collection and use of
          information as described in this policy.
        </p>
        <p>
          <strong>Information We Collect</strong>
        </p>
        <p>The Website may collect the following types of data:</p>
        <ul>
          <li>
            Personal Information: Name, email address, and other details if voluntarily provided.
          </li>
          <li>
            Technical Data: IP address, browser type, and device information for analytics purposes.
          </li>
          <li>
            Cookies & Tracking: We use cookies to enhance user experience and track usage trends.
          </li>
        </ul>
        <p>
          <strong>How We Use Your Information</strong>
        </p>
        <p>The data we collect may be used for:</p>
        <ul>
          <li>Providing and improving our services.</li>
          <li>Enhancing website security and preventing fraud.</li>
          <li>Analyzing trends and user behavior through analytics tools.</li>
        </ul>
        <p>
          <strong>Cookies and Tracking Technologies</strong>
        </p>
        <p>
          We use cookies and similar technologies to personalize content, track website performance,
          and improve user experience. Users can manage or disable cookies through browser settings.
        </p>
        <p>
          <strong>Third-Party Services</strong>
        </p>
        <p>
          We may use third-party services such as Google Analytics to monitor traffic and improve
          services. These services have their own privacy policies, which can be reviewed on their
          respective websites. Below are the links to the Privacy Policy of the third-party service
          providers used by the Application:
        </p>
        <ul>
          <li>
            <Link href="/">Google Play Services</Link>
          </li>
          <li>
            <Link href="/">Google Analytics for Firebase</Link>
          </li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
        </ul>
        <p>
          <strong>Data Security</strong>
        </p>
        <p>
          We implement security measures to protect collected information from unauthorized access
          or misuse. However, no method of transmission over the internet is 100% secure.
        </p>
        <p>
          <strong>Children's Privacy</strong>
        </p>
        <p>
          Our Website is not intended for children under 13, and we do not knowingly collect
          personal data from them. If we become aware that a child has provided information, we will
          take steps to delete it.
        </p>
        <p>
          <strong>Changes to This Policy</strong>
        </p>
        <p>
          We may update this Privacy Policy periodically. Users will be notified of significant
          changes through the Website. Continued use of the Website after modifications implies
          acceptance of the updated policy.
        </p>
        <p>
          <strong>Your Rights under the General Data Protection Regulation (GDPR)</strong>
        </p>
        <p>
          If you are a resident of the European Union or the European Economic Area, you have the
          following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Right of Access</strong>

            <p>You have the right to request access to the personal data we hold about you.</p>
          </li>
          <li>
            <strong>Right to Rectification</strong>

            <p>
              You have the right to request correction of inaccurate or incomplete personal data.
            </p>
          </li>
          <li>
            <strong>Right to Erasure ("Right to Be Forgotten")</strong>

            <p>
              You can request the deletion of your personal data where there is no legal reason for
              us to retain it.
            </p>
          </li>
          <li>
            <strong>Right to Restrict Processing</strong>

            <p>
              You may request that we restrict the processing of your personal data under certain
              conditions.
            </p>
          </li>
          <li>
            <strong>Right to Data Portability</strong>

            <p>
              You can request to receive the personal data you provided to us in a structured,
              commonly used and machine-readable format, and to have it transmitted to another
              controller.
            </p>
          </li>
          <li>
            <strong>Right to Object</strong>

            <p>
              You have the right to object to the processing of your personal data based on
              legitimate interests or for direct marketing purposes.
            </p>
          </li>
          <li>
            <strong>Right to Lodge a Complaint</strong>

            <p>
              If you believe your rights have been violated, you have the right to file a complaint
              with your local data protection authority.
            </p>
          </li>
        </ul>
        <p>
          <strong>Contact us</strong>
        </p>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at
          <Link href="/">info@designwuca.pro</Link>.
        </p>
      </div>
    </section>
  );
}
