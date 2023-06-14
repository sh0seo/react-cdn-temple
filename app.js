// 
// 제휴FAQ
const faqData = [
  {
    "id":1,
    "category": "질문 TOP",
    "question": "1 - title",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 2,
    "category": "사용 TIP",
    "question": "2 - title",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 3,
    "category": "런",
    "question": "3 - title",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  }
]
// 서비스FAQ
const serviceFaqData = [
  {
    "id": 1,
    "category": "회원가입·로그인",
    "question": "휴대폰 인증번호를 받지 못했습니다.",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 2,
    "category": "회원가입·로그인",
    "question": "만 14세 미만도 회원가입 할 수 있나요?",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 3,
    "category": "회원가입·로그인",
    "question": "가입한 이메일을 못찾겠어요.",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 4,
    "category": "회원가입·로그인",
    "question": "비밀번호를 잊었어요.",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 5,
    "category": "회원가입·로그인",
    "question": "회원을 탈퇴하고 싶어요.",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 19,
    "category": "서비스 설정",
    "question": "Galaxy Watch, Apple Watch 연동은 어떻게 하나요?",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 20,
    "category": "서비스 설정",
    "question": "Garmin 연동은 어떻게 하나요?",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
  {
    "id": 21,
    "category": "기타",
    "question": "GPX 다운로드 받았는데 어디에 있나요?",
    "answer": "adsfadsfasdfasldjfasdklfjsdlfjadslkfjadskljflasdkfjalksdjflksdjfal"
  },
]

///////////////////////////////////////////////////////////////////////////////
// SearchBar Component
const Red = styled.div`
  background-color: DodgerBlue;
`;
const Green = styled.span`
  background-color: DarkSeaGreen;
`;
const SearchBar = ({handleKeyword=() => {}}) => {
  return (
    <Red>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) { // 13 is Enter
          handleKeyword(e.target.value);
        }
      }} placeholder="input keyword" />
    </Red>
  );
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Category Tab Component
const CategoryTab = ({click=() => {}, title=''}) => {
  return (
    <Red>
      <button onClick={click}>{title}</button>
    </Red>
  );
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Result List Component
const ResultList = ({data}) => {
  if (!data.length) {
    return (
      <Red>
        <h4>NO RESULT</h4>
      </Red>
    );
  } 

  return (
    <Red>
      {
        data.map((d, i) => {
          return <div key={i}>{d.question}</div>
        })
      }
    </Red>
  );
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Paging Component
const Paging = ({data}) => {
  const PER_PAGING = 10;
  return (
    <Green>
      <Green>&#60; </Green>
      <Green>paing~~~~</Green>
      <Green> &#62;</Green>
    </Green>
  );
}
///////////////////////////////////////////////////////////////////////////////

// styled-component
const DarkRed = styled.div`
  background-color: DarkRed;
`;
// main entry point
const App = ({show = ''}) => {
  // 검색할 키워드
  const [keyword, setKeyword] = React.useState('');
  // 화면에 출력될 결과들.
  const [result, setResult] = React.useState(...serviceFaqData);
  //
  function searchKeyword(keyword) {
    let temp = [...serviceFaqData];
    // temp.push(keyword);
    setResult(temp);
  }
  return (
    <DarkRed>
      <SearchBar handleKeyword={searchKeyword}></SearchBar>
      <div>{keyword}</div>
      <ResultList data={result}></ResultList>
      <Paging data={result}></Paging>
    </DarkRed>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(React.createElement(App));