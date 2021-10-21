//db에서 실제로 가져와야할 값
let obj = [
  {
    title: '여행 제목',
    start: '2021-05-25',
    end: '2021-05-28', //일정이 25~27일 이라면  + 1일 해서 28일을 End day로 설정할 것, calendar api 문제
  },
];

function printCalendar(obj) {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    contentHeight: 'auto',
    initialView: 'dayGridMonth',
    titleFormat: function (date) {
      return date.date.year + '년 ' + (date.date.month + 1) + '월';
    },
    dayHeaderContent: function (date) {
      let weekList = [
        '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0일',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0월',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0화',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0수',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0목',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0금',
        ' \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0토',
      ];
      return weekList[date.dow];
    },
    initialDate: obj[0].start, // 속성 명 변경 시 주의
    headerToolbar: {
      start: '',
      center: 'title',
      end: '',
    },
    events: obj,
  });

  calendar.render();
}

printCalendar(obj);
