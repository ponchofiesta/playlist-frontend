const Calendar = {
  sunday: 'So',
  monday: 'Mo',
  tuesday: 'Di',
  wednesday: 'Mi',
  thursday: 'Do',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Heute',
  yesterday: 'Gestern',
  hours: 'Stunden',
  minutes: 'Minuten',
  seconds: 'Sekunden',
  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: 'MMM YYYY',
  formattedDayPattern: 'dd MMM YYYY'
};

const deDE = {
  common: {
    loading: 'Lädt...',
    emptyMessage: 'Keine Daten gefunden'
  },
  Plaintext: {
    unfilled: 'Nicht ausgefüllt',
    notSelected: 'Nicht ausgewählt',
    notUploaded: 'Nicht hochgeladen'
  },
  Pagination: {
    more: 'Mehr',
    prev: 'Zurück',
    next: 'Weiter',
    first: 'Erste',
    last: 'Letzte'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / Seite',
    totalInfo: 'Total: {0}'
  },
  Calendar,
  DatePicker: {
    ...Calendar
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: 'Letzte 7 Tage'
  },
  Picker: {
    noResultsText: 'Nichts gefunden',
    placeholder: 'Select',
    searchPlaceholder: 'Suche',
    checkAll: 'Alle'
  },
  InputPicker: {
    newItem: 'Neues Element',
    createOption: 'Element "{0}" erstellen'
  },
  Uploader: {
    inited: 'Gestartet',
    progress: 'Lädt hoch',
    error: 'Fehler',
    complete: 'Beendet',
    emptyFile: 'Leer',
    upload: 'Upload'
  },
  CloseButton: {
    closeLabel: 'Schließen'
  },
  Breadcrumb: {
    expandText: 'Pfad anzeigen'
  },
  Toggle: {
    on: 'An',
    off: 'Aus'
  }
};

export default deDE;
