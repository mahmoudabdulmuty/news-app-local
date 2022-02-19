import 'noto-sans-arabic/css/300.css';
import 'noto-sans-arabic/css/400.css';
import 'noto-sans-arabic/css/700.css';
import { useEffect, useState } from 'react';
import Article from './components/Article';
import Header from './components/Header/';
import Menu from './components/Menu';
import {
	business,
	entertainment,
	health,
	science,
	sports,
	technology
} from './data/categories';
import defaultArticles from './data/defaultArticles';

function App() {
	const [articles, setArticles] = useState([]);
	const handleClick = (e) => {
		e.preventDefault();
		e.target.name === 'business'
			? setArticles(business)
			: e.target.name === 'health'
			? setArticles(health)
			: e.target.name === 'entertainment'
			? setArticles(entertainment)
			: e.target.name === 'science'
			? setArticles(science)
			: e.target.name === 'sports'
			? setArticles(sports)
			: e.target.name === 'technology'
			? setArticles(technology)
			: setArticles(defaultArticles);
	};
	useEffect(() => {
		setArticles(defaultArticles);
	}, []);

	return (
		<>
			<Header handleDefault={() => setArticles(defaultArticles)} />
			<Menu handleClick={handleClick} />
			<Article articles={articles} />
		</>
	);
}
export default App;
