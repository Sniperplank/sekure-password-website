import { Stack, Typography } from '@mui/material'
import React from 'react'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function PrivacyPolicy() {
    const { user, setUser } = useAuth()

    return (
        <Stack spacing={5}>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={1} alignItems='center' component={Link} to={user ? '/list' : '/'} sx={{ textDecoration: 'none' }}>
                    <ShieldOutlinedIcon fontSize='large' color='primary' />
                    <Typography variant='h5' fontWeight='bold'>Sekure Password</Typography>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant='h3'>PRIVACY POLICY</Typography>
                <Typography>Last updated April 10, 2025</Typography>
                <br />
                This Privacy Notice for Sekure Password ("we," "us," or "our"), describes
                how and why we might access, collect, store, use, and/or share
                ("process") your personal information when you use our services
                ("Services"), including when you:
                <br />
                <br />
                - Visit our website at https://sekure-password.vercel.app/, or any
                website of ours that links to this Privacy Notice
                <br />
                - Use Sekure Password. Store and manage your passwords. Sign into
                sites quicker with the autofill feature
                <br />
                - Engage with us in other related ways, including any sales,
                marketing, or events
                <br />
                <br />
                Questions or concerns? Reading this Privacy Notice will help you
                understand your privacy rights and choices. We are responsible for making
                decisions about how your personal information is processed. If you do not
                agree with our policies and practices, please do not use our Services. If
                you still have any questions or concerns, please contact us at
                sekurepass@gmail.com.
                <br />
                <br />
                <br />
                <Typography variant='h4'>SUMMARY OF KEY POINTS</Typography>
                <br />
                This summary provides key points from our Privacy Notice, but you
                can find out more details about any of these topics by clicking the
                link following each key point or by using our table of contents below
                to find the section you are looking for.
                <br />
                <br />
                What personal information do we process? When you visit, use, or
                navigate our Services, we may process personal information depending on
                how you interact with us and the Services, the choices you make, and the
                products and features you use. Learn more about personal information you
                disclose to us.
                <br />
                <br />
                Do we process any sensitive personal information? Some of the
                information may be considered "special" or "sensitive" in certain
                jurisdictions, for example your racial or ethnic origins, sexual orientation,
                and religious beliefs. We do not process sensitive personal information.
                <br />
                <br />
                Do we collect any information from third parties? We do not collect any
                information from third parties.
                <br />
                <br />
                How do we process your information? We process your information to
                provide, improve, and administer our Services, communicate with you, for
                security and fraud prevention, and to comply with law. We may also
                process your information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do so. Learn
                more about how we process your information.
                <br />
                <br />
                In what situations and with which parties do we share personal
                information? We may share information in specific situations and with
                specific third parties. Learn more about when and with whom we share
                your personal information.
                <br />
                <br />
                How do we keep your information safe? We have adequate
                organizational and technical processes and procedures in place to protect
                your personal information. However, no electronic transmission over the
                internet or information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. Learn more
                about how we keep your information safe.
                <br />
                <br />
                What are your rights? Depending on where you are located
                geographically, the applicable privacy law may mean you have certain
                rights regarding your personal information. Learn more about your privacy
                rights.
                <br />
                <br />
                How do you exercise your rights? The easiest way to exercise your
                rights is by submitting a data subject access request at https://app.termly.io/notify/2628111a-3d99-4410-9a4e-0b813cc81f70, or
                by contacting us. We will consider and act upon any request in accordance with applicable
                data protection laws.
                <br />
                <br />
                Want to learn more about what we do with any information we
                collect? Review the Privacy Notice in full.
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h4'>TABLE OF CONTENTS</Typography>
                <br />
                1. WHAT INFORMATION DO WE COLLECT?
                <br />
                2. HOW DO WE PROCESS YOUR INFORMATION?
                <br />
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                PERSONAL INFORMATION?
                <br />
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                INFORMATION?
                <br />
                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                <br />
                6. HOW LONG DO WE KEEP YOUR INFORMATION?
                <br />
                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                <br />
                8. DO WE COLLECT INFORMATION FROM MINORS?
                <br />
                9. WHAT ARE YOUR PRIVACY RIGHTS?
                <br />
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
                <br />
                11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                RIGHTS?
                <br />
                12. DO WE MAKE UPDATES TO THIS NOTICE?
                <br />
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                <br />
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                COLLECT FROM YOU?
                <br />
                <br />
                <br />
                <Typography variant='h4'>1. WHAT INFORMATION DO WE COLLECT?</Typography>
                <br />
                Personal information you disclose to us
                <br />
                In Short: We collect personal information that you provide to us.
                <br />
                We collect personal information that you voluntarily provide to us when you
                register on the Services, express an interest in obtaining information about
                us or our products and Services, when you participate in activities on the
                Services, or otherwise when you contact us.
                <br />
                Personal Information Provided by You. The personal information that we
                collect depends on the context of your interactions with us and the
                Services, the choices you make, and the products and features you use.
                The personal information we collect may include the following:
                <br />
                - email addresses
                <br />
                - names
                <br />
                Sensitive Information. We do not process sensitive information.
                <br />
                All personal information that you provide to us must be true, complete, and
                accurate, and you must notify us of any changes to such personal
                information.
                <br />
                <br />
                <br />
                <Typography variant='h4'>2. HOW DO WE PROCESS YOUR INFORMATION?</Typography>
                <br />
                In Short: We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud prevention, and
                to comply with law. We may also process your information for other
                purposes with your consent.
                <br />
                <br />
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
                <br />
                <br />
                - To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you
                can create and log in to your account, as well as keep your account
                in working order.
                <br />
                <br />
                - To save or protect an individual's vital interest. We may process
                your information when necessary to save or protect an individual’s
                vital interest, such as to prevent harm.
                <br />
                <br />
                <br />
                <Typography variant='h4'>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</Typography>
                <br />
                In Short: We only process your personal information when we believe it is
                necessary and we have a valid legal reason (i.e., legal basis) to do so
                under applicable law, like with your consent, to comply with laws, to provide
                you with services to enter into or fulfill our contractual obligations, to protect
                your rights, or to fulfill our legitimate business interests.
                <br />
                <br />
                If you are located in the EU or UK, this section applies to you.
                <br />
                <br />
                The General Data Protection Regulation (GDPR) and UK GDPR require us
                to explain the valid legal bases we rely on in order to process your personal
                information. As such, we may rely on the following legal bases to process
                your personal information:
                <br />
                <br />
                - Consent. We may process your information if you have given us
                permission (i.e., consent) to use your personal information for a
                specific purpose. You can withdraw your consent at any time. Learn
                more about withdrawing your consent.
                <br />
                <br />
                - Legal Obligations. We may process your information where we
                believe it is necessary for compliance with our legal obligations, such
                as to cooperate with a law enforcement body or regulatory agency,
                exercise or defend our legal rights, or disclose your information as
                evidence in litigation in which we are involved.
                <br />
                <br />
                - Vital Interests. We may process your information where we believe
                it is necessary to protect your vital interests or the vital interests of a
                third party, such as situations involving potential threats to the safety
                of any person.
                <br />
                <br />
                If you are located in Canada, this section applies to you.
                <br />
                <br />
                We may process your information if you have given us specific permission
                (i.e., express consent) to use your personal information for a specific
                purpose, or in situations where your permission can be inferred (i.e.,
                implied consent). You can withdraw your consent at any time.
                <br />
                <br />
                In some exceptional cases, we may be legally permitted under applicable
                law to process your information without your consent, including, for
                example:
                <br />
                <br />
                - If collection is clearly in the interests of an individual and consent
                cannot be obtained in a timely way
                <br />
                <br />
                - For investigations and fraud detection and prevention
                <br />
                <br />
                - For business transactions provided certain conditions are met
                <br />
                <br />
                - If it is contained in a witness statement and the collection is
                necessary to assess, process, or settle an insurance claim
                <br />
                <br />
                -For identifying injured, ill, or deceased persons and communicating
                with next of kin
                <br />
                <br />
                - If we have reasonable grounds to believe an individual has been, is,
                or may be victim of financial abuse
                <br />
                <br />
                - If it is reasonable to expect collection and use with consent would
                compromise the availability or the accuracy of the information and
                the collection is reasonable for purposes related to investigating a
                breach of an agreement or a contravention of the laws of Canada or
                a province
                <br />
                <br />
                - If disclosure is required to comply with a subpoena, warrant, court
                order, or rules of the court relating to the production of records
                <br />
                <br />
                - If it was produced by an individual in the course of their employment,
                business, or profession and the collection is consistent with the
                purposes for which the information was produced
                <br />
                <br />
                - If the collection is solely for journalistic, artistic, or literary purposes
                <br />
                <br />
                - If the information is publicly available and is specified by the
                regulations
                <br />
                <br />
                <br />
                <Typography variant='h4'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Typography>
                <br />
                In Short: We may share information in specific situations described in this
                section and/or with the following third parties.
                <br />
                <br />
                We may need to share your personal information in the following situations:
                <br />
                <br />
                - Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of our
                business to another company.
                <br />
                <br />
                <br />
                <Typography variant='h4'>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Typography>
                <br />
                In Short: We may use cookies and other tracking technologies to collect
                and store your information.
                <br />
                <br />
                We may use cookies and similar tracking technologies (like web beacons
                and pixels) to gather information when you interact with our Services.
                Some online tracking technologies help us maintain the security of our
                Services and your account, prevent crashes, fix bugs, save your
                preferences, and assist with basic site functions.
                <br />
                <br />
                We also permit third parties and service providers to use online tracking
                technologies on our Services for analytics and advertising, including to help
                manage and display advertisements, to tailor advertisements to your
                interests, or to send abandoned shopping cart reminders (depending on
                your communication preferences). The third parties and service providers
                use their technology to provide advertising about products and services
                tailored to your interests which may appear either on our Services or on
                other websites.
                <br />
                <br />
                To the extent these online tracking technologies are deemed to be a
                "sale"/"sharing" (which includes targeted advertising, as defined under the
                applicable laws) under applicable US state laws, you can opt out of these
                online tracking technologies by submitting a request as described below
                under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC
                PRIVACY RIGHTS?"
                <br />
                <br />
                Specific information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
                <br />
                <br />
                <br />
                <Typography variant='h4'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</Typography>
                <br />
                In Short: We keep your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Notice unless otherwise required by law.
                <br />
                <br />
                We will only keep your personal information for as long as it is necessary
                for the purposes set out in this Privacy Notice, unless a longer retention
                period is required or permitted by law (such as tax, accounting, or other
                legal requirements). No purpose in this notice will require us keeping your
                personal information for longer than the period of time in which users have
                an account with us.
                <br />
                <br />
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such information,
                or, if this is not possible (for example, because your personal information
                has been stored in backup archives), then we will securely store your
                personal information and isolate it from any further processing until deletion
                is possible.
                <br />
                <br />
                <br />
                <Typography variant='h4'>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Typography>
                <br />
                In Short: We aim to protect your personal information through a system of
                organizational and technical security measures.
                <br />
                <br />
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the security of any
                personal information we process. However, despite our safeguards and
                efforts to secure your information, no electronic transmission over the
                Internet or information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. Although we
                will do our best to protect your personal information, transmission of
                personal information to and from our Services is at your own risk. You
                should only access the Services within a secure environment.
                <br />
                <br />
                <br />
                <Typography variant='h4'>8. DO WE COLLECT INFORMATION FROM MINORS?</Typography>
                <br />
                In Short: We do not knowingly collect data from or market to children
                under 18 years of age.
                <br />
                <br />
                We do not knowingly collect, solicit data from, or market to children under
                18 years of age, nor do we knowingly sell such personal information. By
                using the Services, you represent that you are at least 18 or that you are
                the parent or guardian of such a minor and consent to such minor
                dependent's use of the Services. If we learn that personal information from
                users less than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such data from
                our records. If you become aware of any data we may have collected from
                children under age 18, please contact us at sekurepass@gmail.com.
                <br />
                <br />
                <br />
                <Typography variant='h4'>9. WHAT ARE YOUR PRIVACY RIGHTS?</Typography>
                <br />
                In Short: Depending on your state of residence in the US or in some
                regions, such as the European Economic Area (EEA), United Kingdom
                (UK), Switzerland, and Canada, you have rights that allow you greater
                access to and control over your personal information. You may review,
                change, or terminate your account at any time, depending on your country,
                province, or state of residence.
                <br />
                <br />
                In some regions (like the EEA, UK, Switzerland, and Canada), you have
                certain rights under applicable data protection laws. These may include the
                right (i) to request access and obtain a copy of your personal information,
                (ii) to request rectification or erasure; (iii) to restrict the processing of your
                personal information; (iv) if applicable, to data portability; and (v) not to be
                subject to automated decision-making. In certain circumstances, you may
                also have the right to object to the processing of your personal information.
                You can make such a request by contacting us by using the contact details
                provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
                NOTICE?" below.
                <br />
                <br />
                We will consider and act upon any request in accordance with applicable
                data protection laws.
                <br />
                <br />
                If you are located in the EEA or UK and you believe we are unlawfully
                processing your personal information, you also have the right to complain
                to your Member State data protection authority or UK data protection
                authority.
                <br />
                <br />
                If you are located in Switzerland, you may contact the Federal Data
                Protection and Information Commissioner.
                <br />
                <br />
                Withdrawing your consent: If we are relying on your consent to process
                your personal information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw your
                consent at any time. You can withdraw your consent at any time by
                contacting us by using the contact details provided in the section "HOW
                CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                <br />
                <br />
                However, please note that this will not affect the lawfulness of the
                processing before its withdrawal nor, when applicable law allows, will it
                affect the processing of your personal information conducted in reliance on
                lawful processing grounds other than consent.
                <br />
                <br />
                Account Information
                <br />
                <br />
                <br />
                If you would at any time like to review or change the information in your
                account or terminate your account, you can:
                <br />
                <br />
                - Contact us using the contact information provided.
                <br />
                <br />
                Upon your request to terminate your account, we will deactivate or delete
                your account and information from our active databases. However, we may
                retain some information in our files to prevent fraud, troubleshoot problems,
                assist with any investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
                <br />
                <br />
                Cookies and similar technologies: Most Web browsers are set to accept
                cookies by default. If you prefer, you can usually choose to set your
                browser to remove cookies and to reject cookies. If you choose to remove
                cookies or reject cookies, this could affect certain features or services of
                our Services.
                <br />
                <br />
                If you have questions or comments about your privacy rights, you may
                email us at sekurepass@gmail.com.
                <br />
                <br />
                <br />
                <Typography variant='h4'>10. CONTROLS FOR DO-NOT-TRACK FEATURES</Typography>
                <br />
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting you can
                activate to signal your privacy preference not to have data about your
                online browsing activities monitored and collected. At this stage, no uniform
                technology standard for recognizing and implementing DNT signals has
                been finalized. As such, we do not currently respond to DNT browser
                signals or any other mechanism that automatically communicates your
                choice not to be tracked online. If a standard for online tracking is adopted
                that we must follow in the future, we will inform you about that practice in a
                revised version of this Privacy Notice.
                <br />
                <br />
                California law requires us to let you know how we respond to web browser
                DNT signals. Because there currently is not an industry or legal standard
                for recognizing or honoring DNT signals, we do not respond to them at this
                time.
                <br />
                <br />
                <br />
                <Typography variant='h4'>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Typography>
                <br />
                In Short: If you are a resident of California, Colorado, Connecticut,
                Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
                Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island,
                Tennessee, Texas, Utah, or Virginia, you may have the right to request
                access to and receive details about the personal information we maintain
                about you and how we have processed it, correct inaccuracies, get a copy
                of, or delete your personal information. You may also have the right to
                withdraw your consent to our processing of your personal information.
                These rights may be limited in some circumstances by applicable law. More
                information is provided below.
                <br />
                <br />
                Categories of Personal Information We Collect
                <br />
                <br />
                We have collected the following categories of personal information in the
                past twelve (12) months:
                <br />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Examples</th>
                            <th>Collected</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A. Identifiers</td>
                            <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>B. Personal information as defined in the California Customer Records statute</td>
                            <td>Name, contact information, education, employment, employment history, and financial information</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>C. Protected classification characteristics under state or federal law</td>
                            <td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>D. Commercial information</td>
                            <td>Transaction information, purchase history, financial details, and payment information</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>E. Biometric information</td>
                            <td>Fingerprints and voiceprints</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>F. Internet or other similar network activity</td>
                            <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>G. Geolocation data</td>
                            <td>Device location</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>H. Audio, electronic, sensory, or similar information</td>
                            <td>Images and audio, video or call recordings created in connection with our business activities</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>I. Professional or employment-related information</td>
                            <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>J. Education Information</td>
                            <td>Student records and directory information</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>K. Inferences drawn from collected personal information</td>
                            <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>L. Sensitive personal Information</td>
                            <td></td>
                            <td>NO</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                We may also collect other personal information outside of these categories
                through instances where you interact with us in person, online, or by phone
                or mail in the context of:
                <br />
                <br />
                - Receiving help through our customer support channels;
                <br />
                <br />
                - Participation in customer surveys or contests; and
                <br />
                <br />
                - Facilitation in the delivery of our Services and to respond to your
                inquiries.
                <br />
                <br />
                We will use and retain the collected personal information as needed to
                provide the Services or for:
                <br />
                <br />
                - Category H - As long as the user has an account with us
                <br />
                <br />
                Sources of Personal Information
                <br />
                <br />
                Learn more about the sources of personal information we collect in "WHAT
                INFORMATION DO WE COLLECT?"
                <br />
                <br />
                How We Use and Share Personal Information
                <br />
                <br />
                Learn more about how we use your personal information in the section,
                "HOW DO WE PROCESS YOUR INFORMATION?"
                <br />
                <br />
                Will your information be shared with anyone else?
                <br />
                <br />
                We may disclose your personal information with our service providers
                pursuant to a written contract between us and each service provider. Learn
                more about how we disclose personal information to in the section, "WHEN
                AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                <br />
                <br />
                We may use your personal information for our own business purposes,
                such as for undertaking internal research for technological development
                and demonstration. This is not considered to be "selling" of your personal
                information.
                <br />
                <br />
                We have not disclosed, sold, or shared any personal information to third
                parties for a business or commercial purpose in the preceding twelve (12)
                months. We will not sell or share personal information in the future
                belonging to website visitors, users, and other consumers.
                <br />
                <br />
                Your Rights
                <br />
                <br />
                You have rights under certain US state data protection laws. However,
                these rights are not absolute, and in certain cases, we may decline your
                request as permitted by law. These rights include:
                <br />
                <br />
                - Right to know whether or not we are processing your personal data
                <br />
                <br />
                - Right to access your personal data
                <br />
                <br />
                - Right to correct inaccuracies in your personal data
                <br />
                <br />
                - Right to request the deletion of your personal data
                <br />
                <br />
                - Right to obtain a copy of the personal data you previously shared
                with us
                <br />
                <br />
                - Right to non-discrimination for exercising your rights
                <br />
                <br />
                - Right to opt out of the processing of your personal data if it is used
                for targeted advertising (or sharing as defined under California’s
                privacy law), the sale of personal data, or profiling in furtherance of
                decisions that produce legal or similarly significant effects
                ("profiling")
                <br />
                <br />
                Depending upon the state where you live, you may also have the following
                rights:
                <br />
                <br />
                - Right to access the categories of personal data being processed (as
                permitted by applicable law, including the privacy law in Minnesota)
                <br />
                <br />
                - Right to obtain a list of the categories of third parties to which we
                have disclosed personal data (as permitted by applicable law,
                including the privacy law in California, Delaware, and Maryland)
                <br />
                <br />
                - Right to obtain a list of specific third parties to which we have
                disclosed personal data (as permitted by applicable law, including
                the privacy law in Minnesota and Oregon)
                <br />
                <br />
                - Right to review, understand, question, and correct how personal data
                has been profiled (as permitted by applicable law, including the
                privacy law in Minnesota)
                <br />
                <br />
                - Right to limit use and disclosure of sensitive personal data (as
                permitted by applicable law, including the privacy law in California)
                <br />
                <br />
                - Right to opt out of the collection of sensitive data and personal data
                collected through the operation of a voice or facial recognition
                feature (as permitted by applicable law, including the privacy law in
                Florida)
                <br />
                <br />
                How to Exercise Your Rights
                <br />
                <br />
                To exercise these rights, you can contact us by submitting a data subject
                access request, by emailing us at sekurepass@gmail.com, or by referring
                to the contact details at the bottom of this document.
                <br />
                <br />
                Under certain US state data protection laws, you can designate an
                authorized agent to make a request on your behalf. We may deny a
                request from an authorized agent that does not submit proof that they have
                been validly authorized to act on your behalf in accordance with applicable
                laws.
                <br />
                <br />
                Request Verification
                <br />
                <br />
                Upon receiving your request, we will need to verify your identity to
                determine you are the same person about whom we have the information
                in our system. We will only use personal information provided in your
                request to verify your identity or authority to make the request. However, if
                we cannot verify your identity from the information already maintained by
                us, we may request that you provide additional information for the purposes
                of verifying your identity and for security or fraud-prevention purposes.
                <br />
                <br />
                If you submit the request through an authorized agent, we may need to
                collect additional information to verify your identity before processing your
                request and the agent will need to provide a written and signed permission
                from you to submit such request on your behalf.
                <br />
                <br />
                Appeals
                <br />
                <br />
                Under certain US state data protection laws, if we decline to take action
                regarding your request, you may appeal our decision by emailing us at
                sekurepass@gmail.com. We will inform you in writing of any action taken
                or not taken in response to the appeal, including a written explanation of
                the reasons for the decisions. If your appeal is denied, you may submit a
                complaint to your state attorney general.
                <br />
                <br />
                California "Shine The Light" Law
                <br />
                <br />
                California Civil Code Section 1798.83, also known as the "Shine The Light"
                law, permits our users who are California residents to request and obtain
                from us, once a year and free of charge, information about categories of
                personal information (if any) we disclosed to third parties for direct
                marketing purposes and the names and addresses of all third parties with
                which we shared personal information in the immediately preceding
                calendar year. If you are a California resident and would like to make such
                a request, please submit your request in writing to us by using the contact
                details provided in the section "HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?"
                <br />
                <br />
                <br />
                <Typography variant='h4'>12. DO WE MAKE UPDATES TO THIS NOTICE?</Typography>
                <br />
                In Short: Yes, we will update this notice as necessary to stay compliant
                with relevant laws.
                <br />
                <br />
                We may update this Privacy Notice from time to time. The updated version
                will be indicated by an updated "Revised" date at the top of this Privacy
                Notice. If we make material changes to this Privacy Notice, we may notify
                you either by prominently posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your information.
                <br />
                <br />
                <br />
                <Typography variant='h4'>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Typography>
                <br />
                If you have questions or comments about this notice, you may email us at
                sekurepass@gmail.com
                <br />
                <br />
                <br />
                <Typography variant='h4'>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Typography>
                <br />
                Based on the applicable laws of your country or state of residence in the
                US, you may have the right to request access to the personal information
                we collect from you, details about how we have processed it, correct
                inaccuracies, or delete your personal information. You may also have the
                right to withdraw your consent to our processing of your personal
                information. These rights may be limited in some circumstances by
                applicable law. To request to review, update, or delete your personal
                information, please fill out and submit a data subject access request here.
                https://app.termly.io/notify/2628111a-3d99-4410-9a4e-0b813cc81f70
            </Stack>
        </Stack>
    )
}

export default PrivacyPolicy