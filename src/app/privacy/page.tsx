"use client";

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

const toc = [
  { id: 'definitions', label: 'Definitions and Key Terms' },
  { id: 'introduction', label: 'Introduction and Scope' },
  { id: 'personal-data', label: 'Personal Data Collection' },
  { id: 'processing', label: 'Data Processing and Usage' },
  { id: 'storage', label: 'Data Storage and Security' },
  { id: 'analytics', label: 'Analytics, Advertising, and Third-Party Services' },
  { id: 'rights', label: 'Your Rights and Choices' },
  { id: 'retention', label: 'Data Retention and Deletion' },
  { id: 'transfers', label: 'International Data Transfers and Legal Jurisdiction' },
  { id: 'children', label: "Children&apos;s Privacy" },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'legal', label: 'Legal Information and Contact Details' },
];

export default function PrivacyPolicyPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex items-center space-x-2 py-6">
          <Link href="/">
            <Image src="/lovable-uploads/logo1.png" alt="ColorAnalysis logo" width={64} height={64} />
          </Link>
        </div>
      </header>
      {/* Purple Banner */}
      <div className="bg-brand-plum w-full">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-600 hover:text-brand-plum flex items-center mb-6 text-sm font-medium"
          >
            &larr; Back
          </button>
          <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 mb-8 space-y-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-brand-plum underline hover:text-brand-plum/80">{item.label}</a>
              </li>
            ))}
          </ol>

          {/* 1. Definitions and Key Terms */}
          <section id="definitions" className="mb-8">
            <h3 className="text-xl font-bold mb-2">1. DEFINITIONS AND KEY TERMS</h3>
            <h4 className="font-semibold mt-4 mb-1">1.1 Momiji Group Inc. and Service Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>ColorAnalysis (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)</li>
              <li>Service: All features, functionalities, programs, and content available through ColorAnalysis</li>
              <li>Platform: Our website and related services accessible via any device</li>
              <li>User: Any individual accessing or using our services (&quot;you&quot; or &quot;your&quot;)</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.2 Data and Privacy Terms</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Personal Data: Any information relating to an identified or identifiable natural person</li>
              <li>Processing: Any operation performed on personal data</li>
              <li>Data Controller: ColorAnalysis, determining the purposes and means of processing personal data</li>
              <li>Data Processor: Third parties that process personal data on our behalf</li>
              <li>Cookie: Small text file stored on your device containing data about your platform usage</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">1.3 Security Terms</h4>
            <ul className="list-disc pl-6">
              <li>Authentication: Process of verifying user identity</li>
              <li>Encryption: Process of encoding information to prevent unauthorized access</li>
              <li>Token: Unique identifier used for secure authentication</li>
              <li>SSL/TLS: Security protocols for encrypted data transmission</li>
            </ul>
          </section>

          {/* 2. Introduction and Scope */}
          <section id="introduction" className="mb-8">
            <h3 className="text-xl font-bold mb-2">2. INTRODUCTION AND SCOPE</h3>
            <h4 className="font-semibold mt-4 mb-1">2.1 Policy Overview</h4>
            <p className="mb-2">This privacy policy explains how ColorAnalysis collects, uses, and protects your personal data. It provides detailed information about your privacy rights and how you can exercise them.</p>
            <h4 className="font-semibold mt-4 mb-1">2.2 Policy Application</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All users of ColorAnalysis globally</li>
              <li>All data collection methods</li>
              <li>All service features and functionalities</li>
              <li>All platform versions and updates</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">2.3 Policy Updates</h4>
            <ul className="list-disc pl-6">
              <li>We reserve the right to update this policy</li>
              <li>Material changes will be notified via email</li>
              <li>Continued use after changes constitutes acceptance</li>
            </ul>
          </section>

          {/* 3. Personal Data Collection */}
          <section id="personal-data" className="mb-8">
            <h3 className="text-xl font-bold mb-2">3. PERSONAL DATA COLLECTION</h3>
            <h4 className="font-semibold mt-4 mb-1">3.1 Account Information</h4>
            <span className="block font-semibold mb-1">A. Essential Data</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email address (required for authentication)</li>
              <li>Name (collected during payment processing)</li>
              <li>Last sign-in timestamp</li>
              <li>Unique account identifiers</li>
              <li>IP addresses</li>
            </ul>
            <span className="block font-semibold mb-1">B. Optional Data</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Phone number (if provided through payment processors)</li>
              <li>User preferences and settings</li>
              <li>Communication preferences</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.2 Service Usage Data</h4>
            <span className="block font-semibold mb-1">A. color analysis results</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Final color analysis results</li>
              <li>Completion timestamps</li>
              <li>Performance metrics</li>
            </ul>
            <span className="block text-xs text-gray-500 mb-1">Note: Individual test answers are processed in real-time and are not stored</span>
            <span className="block font-semibold mb-1 mt-2">B. Interaction Data</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Features accessed</li>
              <li>Time spent on platform</li>
              <li>Navigation patterns</li>
              <li>Device information</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.3 Payment Information and Processing</h4>
            <span className="block font-semibold mb-1">3.3.1 Payment Data We Receive</span>
            <span className="block text-xs text-gray-500 mb-1">We only receive and store limited payment information:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Tokenized payment method identifiers</li>
              <li>Last four digits of payment cards</li>
              <li>Card expiration dates</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">3.4 Technical and Device Data</h4>
            <span className="block font-semibold mb-1">A. Device Information</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Operating system and version</li>
              <li>Browser type and version</li>
              <li>Screen resolution</li>
              <li>Device type and model</li>
              <li>Language preferences</li>
            </ul>
            <span className="block font-semibold mb-1">B. Connection Data</span>
            <ul className="list-disc pl-6 mb-2">
              <li>IP address</li>
              <li>Network information</li>
              <li>Connection type</li>
              <li>Geographic location (derived from IP)</li>
              <li>Time zone settings</li>
            </ul>
            <span className="block font-semibold mb-1">C. Performance Data</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Load times</li>
              <li>Error messages</li>
              <li>System performance metrics</li>
              <li>Network latency</li>
              <li>Application response times</li>
            </ul>
          </section>

          {/* 4. Data Processing and Usage */}
          <section id="processing" className="mb-8">
            <h3 className="text-xl font-bold mb-2">4. DATA PROCESSING AND USAGE</h3>
            <h4 className="font-semibold mt-4 mb-1">4.1 Primary Processing Purposes</h4>
            <span className="block font-semibold mb-1">A. Service Provision</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Account creation and management</li>
              <li>Authentication and security</li>
              <li>Feature access and customization</li>
              <li>Customer support</li>
              <li>Service optimization</li>
            </ul>
            <span className="block font-semibold mb-1">B. Payment Processing</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Subscription management</li>
              <li>Payment authorization</li>
              <li>Fraud prevention</li>
              <li>Transaction records</li>
              <li>Billing support</li>
            </ul>
            <span className="block font-semibold mb-1">C. Communication</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Service updates and notifications</li>
              <li>Security alerts</li>
              <li>Product information</li>
              <li>Support responses</li>
              <li>Legal notices</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">4.2 Secondary Processing Purposes</h4>
            <span className="block font-semibold mb-1">A. Service Improvement</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Usage pattern analysis</li>
              <li>Feature optimization</li>
              <li>Performance monitoring</li>
              <li>User experience enhancement</li>
              <li>Bug identification and resolution</li>
            </ul>
            <span className="block font-semibold mb-1">B. Analytics and Research</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Aggregate usage statistics</li>
              <li>Trend analysis</li>
              <li>Platform optimization</li>
              <li>Feature development</li>
              <li>Performance benchmarking</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">4.3 Legal Bases for Processing</h4>
            <span className="block font-semibold mb-1">A. Contractual Necessity</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Account management</li>
              <li>Service provision</li>
              <li>Payment processing</li>
              <li>Feature access</li>
              <li>Support services</li>
            </ul>
            <span className="block font-semibold mb-1">B. Legal Obligations</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Tax compliance</li>
              <li>Financial records</li>
              <li>Legal requirements</li>
              <li>Regulatory compliance</li>
              <li>Safety and security</li>
            </ul>
            <span className="block font-semibold mb-1">C. Legitimate Interests</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Service improvement</li>
              <li>Fraud prevention</li>
              <li>Security maintenance</li>
              <li>Technical optimization</li>
              <li>Business development</li>
            </ul>
            <span className="block font-semibold mb-1">D. Consent-Based Processing</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Marketing communications</li>
              <li>Optional features</li>
              <li>Third-party integrations</li>
              <li>Analytics participation</li>
              <li>Feature testing</li>
            </ul>
          </section>

          {/* 5. Data Storage and Security */}
          <section id="storage" className="mb-8">
            <h3 className="text-xl font-bold mb-2">5. DATA STORAGE AND SECURITY</h3>
            <h4 className="font-semibold mt-4 mb-1">5.1 Storage Location and Data Transfers</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>All personal data is stored in secure European data centers</li>
              <li>Data is transmitted globally using encrypted channels</li>
              <li>We employ appropriate safeguards for international data transfers</li>
              <li>Continuous compliance monitoring and security measures are in place</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.2 Security Measures</h4>
            <h5 className="font-semibold mt-2 mb-1">5.2.1 Infrastructure Security</h5>
            <span className="block font-semibold mb-1">A. Authentication and Access</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Multi-factor Authentication capability</li>
              <li>Passwordless authentication via email</li>
              <li>Single-use verification codes</li>
              <li>Session management with automatic termination</li>
              <li>Role-based access control</li>
              <li>Principle of least privilege</li>
              <li>Access logging and monitoring</li>
              <li>Regular access reviews</li>
              <li>Automated access termination</li>
            </ul>
            <span className="block font-semibold mb-1">B. Data Protection</span>
            <ul className="list-disc pl-6 mb-2">
              <li>SOC2 Type 2 compliance</li>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS encryption for data in transit</li>
              <li>Security protocols for all data transmission</li>
              <li>Regular security audits</li>
            </ul>
            <span className="block font-semibold mb-1">C. System Security</span>
            <ul className="list-disc pl-6 mb-2">
              <li>DDoS Protection via Cloudflare</li>
              <li>Intrusion detection systems</li>
              <li>Regular security patching</li>
              <li>Infrastructure monitoring</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.2.2 Payment Security</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>PCI DSS compliant payment processing</li>
              <li>Tokenized payment information storage</li>
              <li>No access to complete card numbers</li>
              <li>Encrypted payment data transmission</li>
              <li>Immediate security incident response</li>
              <li>Regular compliance monitoring</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.2.3 Backup and Recovery</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Regular automated backups</li>
              <li>Encrypted backup storage</li>
              <li>Disaster recovery planning</li>
              <li>Business continuity measures</li>
              <li>Data restoration procedures</li>
              <li>Geographic redundancy measures</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.2.4 Organizational Security</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Incident response procedures and protocols</li>
              <li>Access control policies and enforcement</li>
              <li>Security incident reporting framework</li>
              <li>Change management procedures</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.2.5 Monitoring and Maintenance</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Real-time system monitoring and security event logging</li>
              <li>Performance tracking and analysis</li>
              <li>Regular security reviews and assessments</li>
              <li>Continuous compliance monitoring</li>
              <li>Regular system updates</li>
              <li>Vulnerability assessments</li>
              <li>Security patch management</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">5.3 Data Breach Notification Procedures</h4>
            <h5 className="font-semibold mt-2 mb-1">5.3.1 Definition and Scope</h5>
            <span className="block mb-1">A data breach is defined as:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Unauthorized access to personal data</li>
              <li>Accidental loss or destruction of personal data</li>
              <li>Unauthorized disclosure of personal data</li>
              <li>Any incident compromising data confidentiality, integrity, or availability</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.3.2 Internal Response</h5>
            <span className="block mb-1">Upon discovering a potential breach, we will:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Immediately initiate our incident response plan</li>
              <li>Assess the nature and scope of the breach</li>
              <li>Take immediate steps to contain the breach</li>
              <li>Document all aspects of the incident</li>
              <li>Evaluate the risks to affected individuals</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.3.3 User Notification</h5>
            <span className="block mb-1">We will notify affected users:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Within 72 hours of breach confirmation</li>
              <li>Through email notification</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.3.4 Notification Content</h5>
            <span className="block mb-1">Our breach notifications will include:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Description of the incident</li>
              <li>Types of data affected</li>
              <li>Potential impact on users</li>
              <li>Steps we&apos;ve taken to address the breach</li>
              <li>Recommended user actions</li>
              <li>Contact information for questions</li>
              <li>Resources for additional support</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.3.5 Regulatory Compliance</h5>
            <span className="block mb-1">Where required by law, we will:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Notify relevant supervisory authorities</li>
              <li>Comply with jurisdiction-specific requirements</li>
              <li>Provide mandatory documentation</li>
              <li>Cooperate with investigations</li>
              <li>Implement required remedial measures</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">5.3.6 Post-Breach Measures</h5>
            <span className="block mb-1">Following any breach, we will:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Conduct a thorough investigation</li>
              <li>Implement additional security measures</li>
              <li>Update procedures as necessary</li>
              <li>Provide ongoing updates to affected users</li>
              <li>Review and enhance security protocols</li>
            </ul>
          </section>

          {/* 6. Analytics, Advertising, and Third-Party Services */}
          <section id="analytics" className="mb-8">
            <h3 className="text-xl font-bold mb-2">6. ANALYTICS, ADVERTISING, AND THIRD-PARTY SERVICES</h3>
            <h4 className="font-semibold mt-4 mb-1">6.1 Analytics and Infrastructure Partners</h4>
            <h5 className="font-semibold mt-2 mb-1">6.1.1 Analytics Services</h5>
            <span className="block mb-1">We utilize the following services to monitor and improve our platform:</span>
            <ul className="list-disc pl-6 mb-2">

              <li>Google Analytics: For user behavior analysis and service optimization</li>
              <li>MixPanel: For user interaction tracking and feature usage analysis</li>
              <li>Google BigQuery: For large-scale data analysis and reporting</li>
              <li>Sentry: For error monitoring, performance tracking, and session recording</li>
              <li>Cloudflare: For performance analytics and security monitoring</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.1.2 Session Recording Details</h5>
            <span className="block mb-1">Through Sentry, we implement session recording with the following safeguards:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Automatic masking of all user inputs</li>
              <li>No collection of personally identifiable information</li>
              <li>Exclusion of all data entry fields</li>
              <li>Anonymization of all user interactions</li>
              <li>Usage limited to bug investigation and performance optimization</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.1.3 Data Collection Scope</h5>
            <span className="block mb-1">These services may collect:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Usage patterns</li>
              <li>Feature interaction data</li>
              <li>Performance metrics</li>
              <li>Error information</li>
              <li>Anonymized user flows</li>
              <li>Aggregate statistics</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">6.2 Advertising Partners and Data Sharing</h4>
            <h5 className="font-semibold mt-2 mb-1">6.2.1 Advertising Partners</h5>
            <span className="block mb-1">We work with various advertising partners, including:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Facebook</li>
              <li>Google</li>
              <li>SnapChat</li>
              <li>TikTok</li>
              <li>Taboola</li>
              <li>Outbrain</li>
              <li>AppLovin</li>
              <li>Pinterest</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.2.2 Data Sharing Practices</h5>
            <span className="block mb-1">These partners may receive:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Anonymous identifiers</li>
              <li>Email addresses (for advertising purposes)</li>
              <li>Usage data</li>
              <li>Device information</li>
              <li>Interaction metrics</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.2.3 Partner Data Usage</h5>
            <span className="block mb-1">Our advertising partners may:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Track user interactions</li>
              <li>Measure ad performance</li>
              <li>Optimize ad targeting</li>
              <li>Create audience segments</li>
              <li>Analyze campaign effectiveness</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">6.3 User Control Over Tracking</h4>
            <h5 className="font-semibold mt-2 mb-1">6.3.1 Tracking Limitations</h5>
            <span className="block mb-1">Users can limit tracking through:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Browser cookie settings</li>
              <li>Ad-blocker extensions</li>
              <li>Device settings</li>
              <li>Platform-specific controls</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.3.2 Opt-Out Options</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>Digital Advertising Alliance (DAA) opt-out tools</li>
              <li>Network Advertising Initiative (NAI) opt-out platform</li>
              <li>Platform-specific advertising settings</li>
              <li>Individual advertising partner opt-outs</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">6.3.3 Impact of Tracking Limitations</h5>
            <span className="block mb-1">Limiting tracking may affect:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Platform functionality</li>
              <li>Service personalization</li>
              <li>Feature availability</li>
              <li>User experience</li>
            </ul>
            <span className="block text-xs text-gray-500">Note: Core service features will remain functional</span>
          </section>

          {/* 7. Your Rights and Choices */}
          <section id="rights" className="mb-8">
            <h3 className="text-xl font-bold mb-2">7. YOUR RIGHTS AND CHOICES</h3>
            <h4 className="font-semibold mt-4 mb-1">7.1 Universal Rights</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Access their personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion (see Section 8.2 for procedures)</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.2 Regional Privacy Rights</h4>
            <h5 className="font-semibold mt-2 mb-1">7.2.1 European Union and UK Residents (GDPR)</h5>
            <span className="block font-semibold mb-1">A. Core Rights</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Right to be informed</li>
              <li>Right to access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Rights regarding automated decision-making</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.2.2 California Residents (CCPA/CPRA)</h5>
            <span className="block font-semibold mb-1">A. Additional Rights</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Knowledge of personal information collection</li>
              <li>Knowledge of information sharing</li>
              <li>Deletion rights</li>
              <li>Correction rights</li>
              <li>Opt-out rights</li>
              <li>Non-discrimination rights</li>
              <li>Portability rights</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.2.3 Australian Residents</h5>
            <span className="block font-semibold mb-1">A. Privacy Act Rights</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Collection notification</li>
              <li>Access rights</li>
              <li>Correction rights</li>
              <li>Purpose specification</li>
              <li>Use limitation</li>
              <li>Disclosure transparency</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.2.4 Canadian Residents</h5>
            <span className="block font-semibold mb-1">A. PIPEDA Rights</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Access rights</li>
              <li>Accuracy rights</li>
              <li>Consent withdrawal</li>
              <li>Use transparency</li>
              <li>Protection expectations</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">7.3 How to Exercise Your Rights</h4>
            <h5 className="font-semibold mt-2 mb-1">7.3.1 Submission Methods</h5>
            <span className="block mb-1">All privacy rights requests can be submitted through any of our official contact channels listed in Section 12.2.</span>
            <h5 className="font-semibold mt-2 mb-1">7.3.2 Verification Process</h5>
            <span className="block font-semibold mb-1">A. Initial Verification</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email verification</li>
              <li>Account authentication (if applicable)</li>
              <li>Identity documentation (if needed for sensitive requests)</li>
            </ul>
            <span className="block font-semibold mb-1">B. Additional Verification</span>
            <span className="block mb-1">For sensitive requests or authorized agents:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Government-issued ID</li>
              <li>Proof of authority (for agents)</li>
              <li>Additional security checks as needed</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.3.3 Response Timelines</h5>
            <span className="block mb-1">We follow these standard response times for all requests:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Initial acknowledgment: Within 72 hours</li>
              <li>Standard response time: 30 days</li>
              <li>Maximum extension period: 45 days (with notification)</li>
              <li>Appeal decisions: 30 days</li>
            </ul>
            <span className="block text-xs text-gray-500 mb-1">Note: California residents receive acknowledgment within 10 days per CCPA requirements.</span>
            <h5 className="font-semibold mt-2 mb-1">7.3.4 Data Delivery</h5>
            <span className="block mb-1">All personal data will be provided in:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Machine-readable format (CSV or JSON)</li>
              <li>With complete data inventory</li>
              <li>Via encrypted transmission</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">7.3.5 Appeal Process</h5>
            <span className="block mb-1">If you&apos;re unsatisfied with our response:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Submit appeal within 30 days</li>
              <li>Include reason for appeal</li>
              <li>Provide any additional information</li>
              <li>Receive decision within 30 days</li>
            </ul>
          </section>

          {/* 8. Data Retention and Deletion */}
          <section id="retention" className="mb-8">
            <h3 className="text-xl font-bold mb-2">8. DATA RETENTION AND DELETION</h3>
            <h4 className="font-semibold mt-4 mb-1">8.1 Retention Periods</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Account data: While account is active</li>
              <li>Payment records: As required by law</li>
              <li>Analytics data: For service improvement</li>
              <li>Communication records: 2 years</li>
              <li>Security logs: 13 months</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">8.2 Deletion Procedures</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Account deletion: 30-day process</li>
              <li>Data removal: Systematic process</li>
              <li>Backup removal: 90-day maximum</li>
              <li>Verification process: Complete removal check</li>
            </ul>
          </section>

          {/* 9. International Data Transfers and Legal Jurisdiction */}
          <section id="transfers" className="mb-8">
            <h3 className="text-xl font-bold mb-2">9. INTERNATIONAL DATA TRANSFERS AND LEGAL JURISDICTION</h3>
            <h4 className="font-semibold mt-4 mb-1">9.1 International Data Transfers</h4>
            <span className="block mb-1">For users outside the European Union, we ensure appropriate data protection through:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Standard contractual clauses for international data transfers</li>
              <li>Technical and organizational security measures</li>
              <li>Regular compliance monitoring and assessments</li>
              <li>Adherence to international data protection requirements</li>
              <li>Continuous evaluation of data protection mechanisms</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">9.2 Legal Jurisdiction and Dispute Resolution</h4>
            <h5 className="font-semibold mt-2 mb-1">9.2.1 Escalation Process</h5>
            <span className="block mb-1">Before pursuing legal action, users must follow our escalation procedure:</span>
            <span className="block font-semibold mb-1">A. First-Level Escalation:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Submit to escalations-leader@ColorAnalysis.com</li>
              <li>Include reference number and prior communication history</li>
              <li>Response provided within 5 business days</li>
            </ul>
            <span className="block font-semibold mb-1">B. Second-Level Escalation:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>If unsatisfied, escalate to escalations-management@ColorAnalysis.com</li>
              <li>Senior management review</li>
              <li>Final decision within 15 business days</li>
            </ul>
            <span className="block font-semibold mb-1">C. Informal Dispute Resolution:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Following escalation process, parties will attempt informal resolution</li>
              <li>30-day good-faith negotiation period</li>
              <li>Direct communication to resolve disputes</li>
            </ul>
            <h5 className="font-semibold mt-2 mb-1">9.2.2 Formal Legal Proceedings</h5>
            <ul className="list-disc pl-6 mb-2">
              <li>This privacy policy is governed by the laws of the State of Delaware, United States</li>
              <li>Any legal proceedings shall be exclusively resolved through binding arbitration as detailed in Section 14 of our Terms and Conditions (as amended for Momiji Group Inc.)</li>
              <li>Arbitration shall be conducted by the Delaware Court of Chancery</li>
              <li>Users expressly consent to the personal jurisdiction of Delaware courts for matters exempt from arbitration</li>
              <li>All claims must be brought within six months of the incident date</li>
            </ul>
            <span className="block text-xs text-gray-500 mb-1">For complete dispute resolution procedures, including arbitration rules, exceptions, and class action waiver, please refer to Section 14 of our Terms and Conditions (as amended for Momiji Group Inc.).</span>
          </section>

          {/* 10. Children&apos;s Privacy */}
          <section id="children" className="mb-8">
            <h3 className="text-xl font-bold mb-2">10. CHILDREN&apos;S PRIVACY</h3>
            <h4 className="font-semibold mt-4 mb-1">10.1 Age Restrictions</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Minimum age: 16 years</li>
              <li>No intentional collection from minors</li>
              <li>Account termination if underage discovered</li>
            </ul>
          </section>

          {/* 11. Changes to This Policy */}
          <section id="changes" className="mb-8">
            <h3 className="text-xl font-bold mb-2">11. CHANGES TO THIS POLICY</h3>
            <h4 className="font-semibold mt-4 mb-1">11.1 Modification Rights</h4>
            <span className="block mb-1">We reserve the right to modify this privacy policy at any time.</span>
            <h4 className="font-semibold mt-4 mb-1">11.2 Types of Changes</h4>
            <span className="block font-semibold mb-1">A. Material Changes</span>
            <span className="block mb-1">Changes that significantly affect your rights or our obligations:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Major changes to data sharing with third parties</li>
              <li>Fundamental changes to data processing purposes</li>
              <li>Significant changes to user privacy rights</li>
            </ul>
            <span className="block font-semibold mb-1">B. Non-Material Changes</span>
            <span className="block mb-1">Changes that don&apos;t substantially affect your rights, including but not limited to:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Updates to reflect current practices</li>
              <li>Adding new product features or services</li>
              <li>Changes to contact information</li>
              <li>Clarifications of existing terms</li>
              <li>Grammatical or formatting updates</li>
              <li>Security enhancements</li>
              <li>Technical documentation updates</li>
              <li>Service improvement descriptions</li>
              <li>Analytics and tracking updates</li>
              <li>Changes to advertising partners and analytics providers</li>
              <li>Updates to third-party integrations</li>
              <li>Regional compliance updates</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.3 Notice Requirements</h4>
            <span className="block font-semibold mb-1">A. Material Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email notification 5 days before implementation</li>
              <li>Changes effective upon notification date</li>
              <li>Continued use constitutes acceptance</li>
            </ul>
            <span className="block font-semibold mb-1">B. Non-Material Changes</span>
            <ul className="list-disc pl-6 mb-2">
              <li>May be implemented immediately</li>
              <li>No advance notice required</li>
              <li>Updated policy posted on website</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-1">11.4 Your Options</h4>
            <ul className="list-disc pl-6 mb-2">
              <li>Review current privacy policy on our website</li>
              <li>Discontinue service use if you disagree with changes</li>
              <li>Continued use indicates acceptance of changes</li>
            </ul>
          </section>

          {/* 12. Legal Information and Contact Details */}
          <section id="legal" className="mb-8">
            <h3 className="text-xl font-bold mb-2">12. LEGAL INFORMATION AND CONTACT DETAILS</h3>
            <h4 className="font-semibold mt-4 mb-1">12.1 Momiji Group Inc. Information</h4>
            <span className="block mb-1">For all inquiries including privacy-related matters:</span>
            <ul className="list-disc pl-6 mb-2">
              <li>Email: info@color-analysis.pro</li>
              <li>Help Center:</li>
              <li>Postal Address: 2604 Whittier Place, Wilmington, DE, 19808, United States</li>
            </ul>
            <span className="block text-xs text-gray-500 mb-1">All inquiries will be handled according to the response timelines detailed in Section 7.3.3.</span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 