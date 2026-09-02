const weeks = [
  {
    name: 'Week 1',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['[10:30–11:50] [12:00-13:20]', 'Моделирование Часть 1 (ЛАБО)', '3202', 'MODELING'],
        ['15:30–16:50 / 17:00-18:20', 'Теоретическая Информатика (ЛАБО)', '4330', 'C++'],
        ['18:30–19:50', 'Теоретическая Информатика (ЛЕКЦ)', '4204', 'C++']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30-11:50', 'Иностранный Язык Для Профессиональной Коммуникации (ПРАК)', '3223', 'RUSSIAN LANGUAGE'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая Документация В Профессиональной Коммуникации (ПРАК)', '3223', 'RUSSIAN LANGUAGE'],
        ['14:00–15:20', 'Моделирование Часть 1 (ПРАК)', '3107м', 'MODELING'],
        ['15:30–16:50', 'Визуализация Результатов Научных Исследований (ЛАБО)', '3120а', 'VISUALIZATION']
      ]}
    ]
  },
  {
    name: 'Week 2',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50', 'Моделирование Часть 1 (ПРАК)', '3112', 'MODELING'],
        ['14:00–15:20', 'Моделирование Часть 1 (ЛЕКЦ)', '3210 МПСУ', 'MODELING'],
        ['15:30–16:50', 'Технология И Конструирование ИМС (ЛЕКЦ)', '1205м', 'TECH & CONSTRUCTION'],
        ['17:00–18:20', 'Теоретическая Информатика (ЛЕКЦ)', '1201м', 'C++'],
        ['18:30–19:50', 'Проектный Менеджмент (ЛЕКЦ)', '1201м', 'PROJECT MANAGEMENT']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный Язык Для Профессиональной Коммуникации (ПРАК)', '3223 ОМС', 'RUSSIAN LANGUAGE'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая Документация В Профессиональной Коммуникации (ПРАК)', '3223 ОМС', 'RUSSIAN LANGUAGE'],
        ['14:00–15:20', 'Визуализация Результатов Научных Исследований (ЛЕКЦ)', '3107м', 'VISUALIZATION'],
        ['15:30–16:50', 'Проектный Менеджмент (ПРАК)', '1202м', 'PROJECT MANAGEMENT']
      ]},
      { name: 'Saturday', ru: 'Суббота', lessons: [
        ['12:00–13:20 / 12:30–13:50 / 14:00–15:20', 'Визуализация Результатов Научных Исследований (ЛАБО)', '3120а', 'VISUALIZATION'],
      ]}
    ]
  },
  {
    name: 'Week 3',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50 / 14:00–15:20', 'Технология И Конструирование ИМС (ЛАБО)', '4116л НМСТ', 'TECH & CONSTRUCTION'],
        ['15:30–16:50 / 17:00–18:20', 'Теоретическая Информатика (ЛАБО)', '4330л МПСУ', 'C++'],
        ['18:30–19:50', 'Теоретическая Информатика (ЛЕКЦ)', '4204м', 'C++']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный Язык Для Профессиональной Коммуникации (ПРАК)', '3223', 'RUSSIAN LANGUAGE'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая Документация В Профессиональной Коммуникации (ПРАК)', '3223', 'RUSSIAN LANGUAGE'],
        ['14:00–15:20', 'Моделирование Часть 1 (ПРАК)', '3107м', 'MODELING'],
        ['15:30–16:50', 'Визуализация Результатов Научных Исследований (ЛАБО)', '3120а', 'VISUALIZATION']
      ]}
    ]
  },
  {
    name: 'Week 4',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50', 'Моделирование Часть 1 (ПРАК)', '3112', 'MODELING'],
        ['14:00–15:20', 'Моделирование Часть 1 (ЛЕКЦ)', '3210 МПСУ', 'MODELING'],
        ['15:30–16:50', 'Технология И Конструирование ИМС (ЛЕКЦ)', '1205м', 'TECH & CONSTRUCTION'],
        ['17:00–18:20', 'Теоретическая Информатика (ЛЕКЦ)', '1201м', 'C++'],
        ['18:30–19:50', 'Проектный Менеджмент (ЛЕКЦ)', '1201м', 'PROJECT MANAGEMENT']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный Язык Для Профессиональной Коммуникации (ПРАК)', '3223 ОМС', 'RUSSIAN LANGUAGE'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая Документация В Профессиональной Коммуникации (ПРАК)', '3223 ОМС', 'RUSSIAN LANGUAGE'],
        ['14:00–15:20', 'Визуализация Результатов Научных Исследований (ЛЕКЦ)', '3107м', 'VISUALIZATION'],
        ['15:30–16:50', 'Проектный Менеджмент (ПРАК)', '1202м', 'PROJECT MANAGEMENT']
      ]},
      { name: 'Saturday', ru: 'Суббота', lessons: [
        ['15:30–16:50 / 17:00–18:20', 'Визуализация Результатов Научных Исследований (ЛАБО)', '3120а', 'VISUALIZATION']
      ]}
    ]
  }
];

let selectedWeek = 0;
const tabs = document.getElementById('weekTabs');
const schedule = document.getElementById('schedule');
const searchInput = document.getElementById('searchInput');

function renderTabs() {
  tabs.innerHTML = weeks.map((w, i) => `<button class="tab ${i === selectedWeek ? 'active' : ''}" data-week="${i}" role="tab" aria-selected="${i === selectedWeek}">${w.name}</button>`).join('');
  tabs.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    selectedWeek = Number(btn.dataset.week);
    renderTabs();
    renderSchedule();
  }));
}

function renderSchedule() {
  const q = searchInput.value.trim().toLowerCase();
  const week = weeks[selectedWeek];
  let html = '';

  for (const day of week.days) {
    const lessons = day.lessons.filter(([time, subject, room, type]) =>
      !q || `${time} ${subject} ${room} ${type} ${day.ru}`.toLowerCase().includes(q)
    );
    if (!lessons.length) continue;

    html += `<section class="day"><div class="day-title"><h2>${day.name}</h2><span>${day.ru}</span></div><div class="grid">`;
    for (const [time, subject, room, type] of lessons) {
      const empty = !subject;
      html += `<article class="lesson ${empty ? 'empty' : ''}">
        <div class="time">${time}</div>
        <div><div class="subject">${subject || 'Free / no class'}</div>${type ? `<span class="badge">${type}</span>` : ''}</div>
        <div class="room">${room || '—'}</div>
      </article>`;
    }
    html += `</div></section>`;
  }

  schedule.innerHTML = html || `<div class="no-results">No classes match your search.</div>`;
}

searchInput.addEventListener('input', renderSchedule);
document.getElementById('themeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾';
});
document.documentElement.classList.add('dark');
renderTabs();
renderSchedule();
