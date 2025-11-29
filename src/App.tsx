import { lazy, Suspense, useState } from 'react'
import styles from './app.module.css'
const GradientBtn = lazy(() => import('./GradientBtn'));
const ExpandingSearch = lazy(() => import('./ExpandingSearch'));
const CodepenTile = lazy(() => import('./CodepenTile'));
const LoadingAnimation = lazy(() => import('./LoadingAnimation'));
const RotatingSquare = lazy(() => import('./RotatingSquare'));
const Archerytarget = lazy(() => import('./Archerytarget'));
const WordCarousel = lazy(() => import('./WordCarousel'));
const FrenchFlag = lazy(() => import('./FrenchFlag'));
const GermanFlag = lazy(() => import('./GermanFlag'));
const MadagascarFlag = lazy(() => import('./MadagascarFlag'));




function App() {
  const [component, setComponent] = useState<string>('')

  const styleComponents = [{
    key: 'gradBtn',
    value: GradientBtn
  },
  {
    key: 'expandingSearch',
    value: ExpandingSearch
  },
  {
    key: 'codepenTile',
    value: CodepenTile
  },
  {
    key: 'loadingAnimation',
    value: LoadingAnimation
  },
  {
    key: 'rotatingSquare',
    value: RotatingSquare,
  },
  {
    key: 'archery',
    value: Archerytarget,
  },
  {
    key: 'wordCarousel',
    value: WordCarousel,
  },
  {
    key: 'frenchFlag',
    value: FrenchFlag,
  },
  {
    key: 'germanFlag',
    value: GermanFlag,
  },
   {
    key: 'madaFlag',
    value: MadagascarFlag,
  },
  ]

  const options = [
    { key: 'gradBtn', optionName: 'Gradient Btn' },
    { key: 'expandingSearch', optionName: 'ExpandingSearch' },
    { key: 'codepenTile', optionName: 'CodepenTile' },
    { key: 'loadingAnimation', optionName: 'Loading Animation' },
    { key: 'rotatingSquare', optionName: 'Rotating Square' },
    { key: 'archery', optionName: 'Archery Target' },
    { key: 'wordCarousel', optionName: 'Word Carousel' },
    { key: 'frenchFlag', optionName: 'French Flag' },
    { key: 'germanFlag', optionName: 'German Flag' },
    {
    key: 'madaFlag',
    optionName: 'MadagascarFlag',
  },
  ]
  const SelectedComponent = styleComponents.find(c => c.key === component)?.value;

  return (
    <Suspense>
      <nav className={styles.navBar}>
        <p className={styles.navHeader}>Styling Parade</p>
        <select
          className={styles.option}
          onChange={(e) => setComponent(e.target.value)}
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.optionName}
            </option>
          ))}
        </select>
      </nav>

      {SelectedComponent && <SelectedComponent />}
    </Suspense>
  );

}

export default App
