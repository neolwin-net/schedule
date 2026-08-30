const weeks = [
  {
    name: 'Week 1',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['10:30–11:50 / 12:00-13:20 / 12:30-13:50', 'Ч-I | Моделирование. Часть 1 (ЛАБО)', '3202л МПСУ', 'Лаб'],
        ['15:30–16:50 / 17:00-18:20', 'Теоретическая информатика (ЛАБО)', '4330л МПСУ', 'Лаб'],
        ['18:30–19:50', 'Теоретическая информатика (ЛЕКЦ)', '4204 м', 'Лекц']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30-11:50', 'Иностранный язык для профессиональной коммуникации (ПРАК)', '3223', 'Прак'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая документация в профессиональной коммуникации (ПРАК)', '3224', 'Прак'],
        ['14:00–15:20', 'Моделирование. Часть 1 (ПРАК)', '3107 м', 'Прак'],
        ['15:30–16:50', 'Визуализация результатов научных исследований (ЛАБО)', '3120а', 'Лаб']
      ]}
    ]
  },
  {
    name: 'Week 2',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50', 'Моделирование. Часть 1 (ПРАК)', '3112', 'Прак'],
        ['14:00–15:20', 'Моделирование. Часть 1 (ЛЕКЦ)', '3210 МПСУ', 'Лекц'],
        ['15:30–16:50', 'Технология и конструирование ИМС (ЛЕКЦ)', '1205 м', 'Лекц'],
        ['17:00–18:20', 'Теоретическая информатика (ЛЕКЦ)', '1201 м', 'Лекц'],
        ['18:30–19:50', 'Проектный менеджмент (ЛЕКЦ)', '1201 м', 'Лекц']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный язык для профессиональной коммуникации (ПРАК)', '3223 ОМС', 'Прак'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая документация в профессиональной коммуникации (ПРАК)', '3223 ОМС', 'Прак'],
        ['14:00–15:20', 'Визуализация результатов научных исследований (ЛЕКЦ)', '3107 м', 'Лекц'],
        ['15:30–16:50', 'Проектный менеджмент (ПРАК)', '1202 м', 'Прак']
      ]},
      { name: 'Saturday', ru: 'Суббота', lessons: [
        ['12:00–13:20 / 12:30–13:50 / 14:00–15:20', 'З-I | Визуализация результатов научных исследований (ЛАБО)', '3120а', 'Лаб'],
      ]}
    ]
  },
  {
    name: 'Week 3',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50 / 14:00–15:20', 'Ч-II | Технология и конструирование ИМС (ЛАБО)', '4116л НМСТ', 'Лаб'],
        ['15:30–16:50 / 17:00–18:20', 'Теоретическая информатика (ЛАБО)', '4330л МПСУ', 'Лаб'],
        ['18:30–19:50', 'Теоретическая информатика (ЛЕКЦ)', '4204 м', 'Лекц']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный язык для профессиональной коммуникации (ПРАК)', '3223', 'Прак'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая документация в профессиональной коммуникации (ПРАК)', '3224', 'Прак'],
        ['14:00–15:20', 'Моделирование. Часть 1 (ПРАК)', '3107 м', 'Прак'],
        ['15:30–16:50', 'Визуализация результатов научных исследований (ЛАБО)', '3120а', 'Лаб']
      ]}
    ]
  },
  {
    name: 'Week 4',
    days: [
      { name: 'Wednesday', ru: 'Среда', lessons: [
        ['12:00–13:20 / 12:30–13:50', 'Моделирование. Часть 1 (ПРАК)', '3112', 'Прак'],
        ['14:00–15:20', 'Моделирование. Часть 1 (ЛЕКЦ)', '3210 МПСУ', 'Лекц'],
        ['15:30–16:50', 'Технология и конструирование ИМС (ЛЕКЦ)', '1205 м', 'Лекц'],
        ['17:00–18:20', 'Теоретическая информатика (ЛЕКЦ)', '1201 м', 'Лекц'],
        ['18:30–19:50', 'Проектный менеджмент (ЛЕКЦ)', '1201 м', 'Лекц']
      ]},
      { name: 'Thursday', ru: 'Четверг', lessons: [
        ['09:00–10:20 / 10:30–11:50', 'Иностранный язык для профессиональной коммуникации (ПРАК)', '3223 ОМС', 'Прак'],
        ['12:00–13:20 / 12:30–13:50', 'Научно-техническая документация в профессиональной коммуникации (ПРАК)', '3223 ОМС', 'Прак'],
        ['14:00–15:20', 'Визуализация результатов научных исследований (ЛЕКЦ)', '3107 м', 'Лекц'],
        ['15:30–16:50', 'Проектный менеджмент (ПРАК)', '1202 м', 'Прак']
      ]},
      { name: 'Saturday', ru: 'Суббота', lessons: [
        ['15:30–16:50 / 17:00–18:20', 'З-II | Визуализация результатов научных исследований (ЛАБО)', '3120а', 'Лаб']
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

renderTabs();
renderSchedule();
