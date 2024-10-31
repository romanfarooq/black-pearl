function qualifiedLngFor(lng: string): string {
  switch (lng) {
    case "ar":
      return "ar-SA";
    case "en":
      return "en-US";
    default:
      return lng;
  }
}

export function number(
  value: number,
  lng: string | undefined,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(qualifiedLngFor(lng!), options).format(value);
}

export function currency(
  value: number,
  lng: string | undefined,
  options?: Intl.NumberFormatOptions,
): string {
  return number(value, lng, {
    style: "currency",
    ...options,
  });
}

export function datetime(
  value: Date | number,
  lng: string | undefined,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(qualifiedLngFor(lng!), options).format(value);
}
