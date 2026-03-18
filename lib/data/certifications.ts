import { Certification } from '@/lib/types';

export const certifications: Certification[] = [
  // TEMPLATE: Copy this and modify with your own certificate details
  // {
  //   id: 'cert-001',
  //   title: 'Advanced Machine Learning',
  //   issuer: 'Coursera',
  //   issueDate: '2024-01-15',
  //   expiryDate: '2026-01-15',
  //   credentialId: 'ABC123XYZ',
  //   credentialUrl: 'https://coursera.org/verify/ABC123XYZ',
  //   certificateImage: '/certificates/ml-certificate.jpg',  // Image must be in /public/certificates/
  //   description: 'Completed advanced coursework in machine learning algorithms and deep learning.',
  //   featured: true,
  // },
  {
  id: 'cert-004',
  title: 'Data Science Professional Certificate',
  issuer: 'Coursera',
  issueDate: '2025-07-10', // adjust if needed
  expiryDate: '', // Coursera certificates typically don’t expire
  credentialId: 'A0HLUXYNMI53',
  credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/A0HLUXYNMI53',
  certificateImage: '/certificates/Screenshot 2026-03-18 201137.png',
  description: 'Completed a comprehensive Data Science Professional Certificate, covering data analysis, data visualization, statistical methods, and machine learning fundamentals. Developed hands-on experience with Python, working on real-world datasets, building predictive models, and communicating insights effectively for data-driven decision making.',
  featured: true,
},
  {
    id: 'cert-coursera-ml',
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    issueDate: '2026-10-15',
    credentialId: 'E39SOXONL004',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/E39SOXONL004',
    certificateImage: '/certificates/image.png',
    description: 'Completed a comprehensive Machine Learning Specialization covering prediction, classification, clustering, and real-world data analysis using Python.',
    featured: true,
  },
 {
  id: 'cert-003',
  title: 'Introduction to Data Science Specialization',
  issuer: 'Coursera',
  issueDate: '2026-07-01', // adjust if needed
  expiryDate: '', // Coursera certificates usually don’t expire
  credentialId: '6Q3ZFC8NA63A',
  credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/6Q3ZFC8NA63A',
  certificateImage: '/certificates/Screenshot 2026-03-18 200607.png',
  description: 'Completed an Introduction to Data Science Specialization, covering fundamental concepts such as data analysis, data visualization, statistical thinking, and basic machine learning. Gained hands-on experience working with real-world datasets and using tools like Python to extract insights and support data-driven decision making.',
  featured: false,
}, 

{
  id: 'cert-005',
  title: 'CertNexus Certified Data Science Practitioner',
  issuer: 'CertNexus',
  issueDate: '2026-03-18', // adjust if needed
  expiryDate: '', // CertNexus certificates typically don’t expire
  credentialId: 'V6935UVKSLF1',
  credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/V6935UVKSLF1',
  certificateImage: "/certificates/Screenshot 2026-03-18 201543.png",
  description: 'Completed a Professional Certificate in AI and Machine Learning, focusing on supervised and unsupervised learning, model evaluation, and practical AI applications. Gained hands-on experience building machine learning models using Python, working with real-world datasets, and applying AI techniques to solve business and technical problems.',
  featured: true,
}, 
{
  id: 'exp-001',
  title: 'Volunteer Research Assistant',
  issuer: 'CRDALE Labs & GSS GIKI',
  issueDate: '2025-08-01',
  description: 'Worked as a Volunteer Research Assistant assisting in data collection, preprocessing, and analysis for research projects. Contributed to literature reviews, experimental design, and documentation. Gained hands-on experience with data management, research methodologies, and collaborative scientific workflows. Supported the research team in generating insights and reporting findings effectively.',
  featured: true,
  certificateImage: '/certificates/Screenshot 2026-03-18 202424.png'
}, 
{
  id: 'award-001',
  title: 'PEEF Scholarship',
  issuer: 'Punjab Educational Endowment Fund (PEEF)',
  issueDate: '2023-01-01',
  expiryDate: '', // typically scholarships do not expire
  credentialId: '', // optional if available
  credentialUrl: '', // optional if a verification link exists
  description: 'Awarded the prestigious PEEF Scholarship for academic excellence, recognizing outstanding performance and dedication in higher education. Supported financially and academically to pursue Bachelor’s degree studies with a focus on Computer Science and related technical fields.',
  featured: true,
  certificateImage: '/certificates/Screenshot 2026-03-18 202826.png'
}
  // Add more certificates here following the template above
];

export const getFeaturedCertifications = (): Certification[] => {
  return certifications.filter((cert) => cert.featured);
};

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find((cert) => cert.id === id);
};

export const getAllCertifications = (): Certification[] => {
  return certifications.sort((a, b) =>
    new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
  );
};

