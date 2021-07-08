const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null); //괄호 안에 초깃값

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {
        return '정답: ' + value;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputEl.current.focus(); //dom에 접근. current 붙여주기
    } else {
      setResult('땡');
      setValue('');
      inputEl.current.focus();
    }
  };
  return (
    <>
      <div>
        {first} 곱하기 {second} = ?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type='number'
          onChange={onChangeInput}
          value={value}
        />
        <button>입력</button>
      </form>
      <div id='result'>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
