<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="relative my-12">
      <div>
        <h2
          class="text-center md:text-3xl font-bold leading-8 tracking-tight text-gray-900 text-2xl"
        >
          Community Events Calendar
        </h2>
        <p class="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">
          Stay informed about our upcoming staff training, maintenance
          schedules, and community outreach events. This calendar helps our team
          coordinate activities and lets our patients know about potential
          service adjustments.
        </p>
      </div>
    </div>
    <div class="relative mx-auto max-w-3xl">
      <!-- Calendar Header -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-900">
          {{ currentMonthName }} {{ currentYear }}
        </h2>
        <div class="flex space-x-2">
          <button
            @click="previousMonth"
            class="p-1.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100"
          >
            <span class="sr-only">Previous month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            @click="nextMonth"
            class="p-1.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100"
          >
            <span class="sr-only">Next month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Weekday Headers -->
      <div class="grid grid-cols-7 text-xs text-gray-500 mb-1">
        <div class="text-center">M</div>
        <div class="text-center">T</div>
        <div class="text-center">W</div>
        <div class="text-center">T</div>
        <div class="text-center">F</div>
        <div class="text-center">S</div>
        <div class="text-center">S</div>
      </div>

      <!-- Calendar Grid -->
      <div
        class="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden"
      >
        <button
          v-for="day in calendarDays"
          :key="day.date"
          type="button"
          :class="[
            'relative py-2 bg-white hover:bg-gray-50 focus:z-10',
            day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400',
            day.hasEvent ? 'font-medium' : '',
            day.isToday ? 'bg-gray-50' : '',
          ]"
          @click="selectDate(day)"
        >
          <time
            :datetime="day.date"
            :class="[
              'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
              day.isToday ? 'bg-red-600 font-semibold text-white' : '',
              day.isSelected && !day.isToday
                ? 'bg-gray-900 font-semibold text-white'
                : '',
            ]"
          >
            {{ formatDayNumber(day.date) }}
          </time>
          <!-- Event indicator -->
          <span
            v-if="day.hasEvent"
            class="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full bg-red-500"
          ></span>
        </button>
      </div>
    </div>

    <!-- Upcoming Events Section -->
    <section class="mt-8 mx-auto max-w-3xl">
      <h2 class="text-base font-semibold text-gray-900 mb-4">
        Upcoming Events
      </h2>
      <div v-if="selectedDateEvents.length > 0">
        <p class="text-sm text-gray-600 mb-2">
          Events for {{ formatSelectedDate }}:
        </p>
        <ol class="divide-y divide-gray-200">
          <li v-for="event in selectedDateEvents" :key="event.id" class="py-3">
            <div class="flex items-start">
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">
                  {{ event.title }}
                </p>
                <p class="text-xs text-gray-500">
                  <time :datetime="event.startTime">{{
                    formatEventTime(event.startTime)
                  }}</time>
                  <span v-if="event.endTime">
                    -
                    <time :datetime="event.endTime">{{
                      formatEventTime(event.endTime)
                    }}</time></span
                  >
                  <span v-else-if="event.isAllDay">All day</span>
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div v-else-if="selectedDate">
        <p class="text-sm text-gray-600">
          No events scheduled for {{ formatSelectedDate }}
        </p>
      </div>
      <div v-else>
        <ol class="divide-y divide-gray-200">
          <li v-for="event in upcomingEvents" :key="event.id" class="py-3">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-28">
                <p class="text-sm text-gray-500">
                  {{ formatEventDate(event.date) }}
                </p>
              </div>
              <div class="flex-1 ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {{ event.title }}
                </p>
                <p class="text-xs text-gray-500">
                  <span v-if="event.isAllDay">All day</span>
                  <template v-else>
                    <time :datetime="event.startTime">{{
                      formatEventTime(event.startTime)
                    }}</time>
                    <span v-if="event.endTime">
                      -
                      <time :datetime="event.endTime">{{
                        formatEventTime(event.endTime)
                      }}</time></span
                    >
                  </template>
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Current date tracking
const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());
const selectedDate = ref(null);

// Hard-coded events
const events = [
  {
    id: 1,
    title: "Monthly Food Drive - Downtown Community Center",
    date: "2025-03-16",
    startTime: "09:00",
    endTime: "16:00",
    isAllDay: false,
  },
  
  {
    id: 2,
    title: "Mobile Soup Kitchen - Central Park",
    date: "2025-03-22",
    startTime: "11:00",
    endTime: "14:00",
    isAllDay: false,
  },
 
  {
    id: 3,
    title: "Donation Drop-off Day",
    date: "2025-04-10",
    startTime: "08:00",
    endTime: "18:00",
    isAllDay: false,
  }
];

// Calendar utils
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  // Get day of week (0-6, where 0 is Sunday)
  const day = new Date(currentYear.value, currentMonth.value, 1).getDay();
  // Convert to 0-6 where 0 is Monday
  return day === 0 ? 6 : day - 1;
});

const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    "default",
    { month: "long" }
  );
});

const calendarDays = computed(() => {
  const days = [];

  // Add days from previous month
  const prevMonthDays = new Date(
    currentYear.value,
    currentMonth.value,
    0
  ).getDate();
  for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
    const date = `${currentYear.value}-${String(currentMonth.value).padStart(
      2,
      "0"
    )}-${String(prevMonthDays - i).padStart(2, "0")}`;
    days.push({
      date: date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: selectedDate.value === date,
      hasEvent: hasEventOnDate(date),
    });
  }

  // Add days from current month
  const formattedMonth = String(currentMonth.value + 1).padStart(2, "0");
  for (let i = 1; i <= daysInMonth.value; i++) {
    const date = `${currentYear.value}-${formattedMonth}-${String(i).padStart(
      2,
      "0"
    )}`;
    const isToday =
      i === today.getDate() &&
      currentMonth.value === today.getMonth() &&
      currentYear.value === today.getFullYear();

    days.push({
      date: date,
      isCurrentMonth: true,
      isToday: isToday,
      isSelected: selectedDate.value === date,
      hasEvent: hasEventOnDate(date),
    });
  }

  // Add days from next month to complete the grid (always 6 rows of 7 days = 42 cells)
  const remainingDays = 42 - days.length;
  const nextMonth = currentMonth.value + 1 > 11 ? 0 : currentMonth.value + 1;
  const nextMonthYear =
    nextMonth === 0 ? currentYear.value + 1 : currentYear.value;
  const formattedNextMonth = String(nextMonth + 1).padStart(2, "0");

  for (let i = 1; i <= remainingDays; i++) {
    const date = `${nextMonthYear}-${formattedNextMonth}-${String(i).padStart(
      2,
      "0"
    )}`;
    days.push({
      date: date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: selectedDate.value === date,
      hasEvent: hasEventOnDate(date),
    });
  }

  return days;
});

const upcomingEvents = computed(() => {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5); // Limit to 5 upcoming events
});

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return [];
  return events
    .filter((event) => event.date === selectedDate.value)
    .sort((a, b) => {
      if (a.isAllDay && !b.isAllDay) return -1;
      if (!a.isAllDay && b.isAllDay) return 1;
      if (a.isAllDay && b.isAllDay) return 0;
      return a.startTime.localeCompare(b.startTime);
    });
});

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return "";
  return new Date(selectedDate.value).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
});

// Methods
function previousMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
  selectedDate.value = null;
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
  selectedDate.value = null;
}

function selectDate(day) {
  selectedDate.value = day.isSelected ? null : day.date;
}

function formatDayNumber(dateString) {
  return dateString.split("-")[2].replace(/^0/, "");
}

function formatEventDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatEventTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const h = parseInt(hours, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const formattedHours = h % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
}

function hasEventOnDate(date) {
  return events.some((event) => event.date === date);
}

// Initialize with today selected
onMounted(() => {
  const formattedToday = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  if (hasEventOnDate(formattedToday)) {
    selectedDate.value = formattedToday;
  }
});
</script>
