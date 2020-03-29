export const header = {
  title: "Breaking Bad",
  logoAlt: "Logo of Breaking Bad",
}

export const characters = {
  title: "Characters",
  buttonDetail: name => `See details of ${name}`,
}

export const modal = {
  close: "Close",
}

const andOrComma = values =>
  values.reduce((acum, value, index) => {
    if (index === 0) return value
    if (index < values.length - 1) return `${acum}, ${value}`
    return `${acum} and ${value}`
  })

export const modalCharacterDetail = {
  age: "Age:",
  ageText: age => `${age} years old`,
  occupation: "Occupation:",
  occupationText: andOrComma,
  portrayed: "Portrayed by:",
  seasonAppearance: "Season appearance:",
  seasonAppearanceText: andOrComma,
}
