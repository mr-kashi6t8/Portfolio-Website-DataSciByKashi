import { Skill, SkillCategory } from '../types';

export const skills: Skill[] = [
  // Machine Learning
  { id: 'python', name: 'Python', category: 'Machine Learning', level: 95 },
  { id: 'scikit-learn', name: 'Scikit-learn', category: 'Machine Learning', level: 90 },
  { id: 'tensorflow', name: 'TensorFlow', category: 'Machine Learning', level: 75 },
  { id: 'pytorch', name: 'PyTorch', category: 'Machine Learning', level: 70 },
  { id: 'keras', name: 'Keras', category: 'Machine Learning', level: 80 },
  { id: 'xgboost', name: 'XGBoost', category: 'Machine Learning', level: 85 },

  // Data Analysis
  { id: 'pandas', name: 'Pandas', category: 'Data Analysis', level: 95 },
  { id: 'numpy', name: 'NumPy', category: 'Data Analysis', level: 90 },
  { id: 'matplotlib', name: 'Matplotlib', category: 'Data Analysis', level: 90 },
  { id: 'seaborn', name: 'Seaborn', category: 'Data Analysis', level: 88 },
  { id: 'plotly', name: 'Plotly', category: 'Data Analysis', level: 85 },
  { id: 'sql', name: 'SQL', category: 'Data Analysis', level: 85 },

  // Tools & Frameworks
  { id: 'streamlit', name: 'Streamlit', category: 'Tools & Frameworks', level: 92 },
  { id: 'jupyter', name: 'Jupyter Notebook', category: 'Tools & Frameworks', level: 95 },
  { id: 'git', name: 'Git & GitHub', category: 'Tools & Frameworks', level: 88 },
  { id: 'docker', name: 'Docker', category: 'Tools & Frameworks', level: 75 },
  { id: 'flask', name: 'Flask', category: 'Tools & Frameworks', level: 80 },
  { id: 'fastapi', name: 'FastAPI', category: 'Tools & Frameworks', level: 78 },

  // Web Development
  { id: 'nextjs', name: 'Next.js', category: 'Web Development', level: 85 },
  { id: 'react', name: 'React', category: 'Web Development', level: 82 },
  { id: 'typescript', name: 'TypeScript', category: 'Web Development', level: 80 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Web Development', level: 88 },
  { id: 'html-css', name: 'HTML/CSS', category: 'Web Development', level: 90 },

  // Other
  { id: 'nlp', name: 'Natural Language Processing', category: 'Other', level: 78 },
  { id: 'computer-vision', name: 'Computer Vision', category: 'Other', level: 72 },
  { id: 'statistics', name: 'Statistics', category: 'Other', level: 85 },
  { id: 'data-viz', name: 'Data Visualization', category: 'Other', level: 90 },
];

export const skillsByCategory: SkillCategory[] = [
  {
    category: 'Machine Learning',
    skills: skills.filter(skill => skill.category === 'Machine Learning'),
  },
  {
    category: 'Data Analysis',
    skills: skills.filter(skill => skill.category === 'Data Analysis'),
  },
  {
    category: 'Tools & Frameworks',
    skills: skills.filter(skill => skill.category === 'Tools & Frameworks'),
  },
  {
    category: 'Web Development',
    skills: skills.filter(skill => skill.category === 'Web Development'),
  },
  {
    category: 'Other',
    skills: skills.filter(skill => skill.category === 'Other'),
  },
];

// Get skills by category
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

// Get top skills (by level)
export const getTopSkills = (limit: number = 8): Skill[] => {
  return [...skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

// Core technical stack for hero/landing display
export const coreTechStack = [
  'Python',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Streamlit',
  'TensorFlow',
  'Matplotlib',
  'SQL',
  'Next.js',
  'Machine Learning',
  'Data Analysis',
  'Predictive Modeling',
];
