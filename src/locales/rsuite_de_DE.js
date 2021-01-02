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
  formattedMonthPattern: 'MMM yyyy',
  formattedDayPattern: 'dd MMM yyyy'
};

export default {
  common: {
    loading: 'Lädt...',
    emptyMessage: 'Keine Daten gefunden'
  },
  Plaintext: {
    unfilled: 'Unfilled',
    notSelected: 'Not selected',
    notUploaded: 'Not uploaded'
  },
  Pagination: {
    more: 'Mehr',
    prev: 'Zurück',
    next: 'Weiter',
    first: 'Erste',
    last: 'Letzte'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / page',
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
    noResultsText: 'No results found',
    placeholder: 'Select',
    searchPlaceholder: 'Search',
    checkAll: 'All'
  },
  InputPicker: {
    newItem: 'Neues Element',
    createOption: 'Create option "{0}"'
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
