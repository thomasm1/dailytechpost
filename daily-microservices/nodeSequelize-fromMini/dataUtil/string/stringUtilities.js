
//////////// Unicode \u
// \b - backspace  // \f - formfeed
// \r - carriage return  // \t - tab && \v - vertical tab
// 
//- Emojis
let unicode ="\u{1F601}" // 5-length Hex codes 1F601-1F64F

/////////////  FORMAT   /////////////////
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }
  
  const NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
  export function formatNumber(number) {
    return NUMBER_FORMATTER.format(number)
  }
  
  const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  })
  export function formatCompactNumber(number) {
    return COMPACT_NUMBER_FORMATTER.format(number)
  }
  
  const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ]
  const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  })
  export function formatRelativeDate(toDate, fromDate = new Date()) {
    let duration = (toDate - fromDate) / 1000
  
    for (let i = 0; i <= DIVISIONS.length; i++) {
      const division = DIVISIONS[i]
      if (Math.abs(duration) < division.amount) {
        return RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
      }
      duration /= division.amount
    }
  }

/////////////// ENCODE ////////////////////
// Encode a string   // BTOA == encode
 
export function encodeData(str) {
    return window.btoa(str);       
}

 // DECODE Base64  /// ATOB == decode
export function decodeData(encodedData) {
    return window.atob(encodedData);
} 