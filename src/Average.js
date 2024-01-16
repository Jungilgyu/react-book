import { useState, useMemo } from 'react';

const getAverage = numbers => {
	console.log('평균값 계산 중 ...');

	if (numbers.length === 0) {
		return 0
	}

	const sum = numbers.reduce((a,b) => a + b);
	return sum / numbers.length
}

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');

	// javascript에서 매개변수가 1개일 떄 괄호 생략하여 작성 가능 
	const onChange = e => {
		setNumber(e.target.value);
	};

	const onInsert = e => {
		const nextList = list.concat(parseInt(number));  //concat: 배열에 새로운 요소나 다른 배열을 추가하여 새로운 배열을 생성 
		setList(nextList);
		setNumber('');
	};

	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			<input value={number} onChange={onChange}/>
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				<b>평균값:</b>{avg}
			</div>
		</div>
	);
};

export default Average;
