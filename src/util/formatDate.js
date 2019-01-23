export default timestamp => {
  const formatMonth = month => {
    switch (month) {
      case 1:
        return `January`
      case 2:
        return `February`
      case 3:
        return `March`
      case 4:
        return `April`
      case 5:
        return `May`
      case 6:
        return `June`
      case 7:
        return `July`
      case 8:
        return `August`
      case 9:
        return `September`
      case 10:
        return `October`
      case 11:
        return `November`
      default:
        return `December`
    }
  }

  const formatAppend = day => {
    switch (day) {
      case 1:
        return `st`
      case 2:
        return `nd`
      case 3:
        return `rd`
      default:
        return `th`
    }
  }

  const date = new Date(timestamp * 1000)

  const year = date.getFullYear()

  const month = date.getMonth() + 1

  const day = date.getUTCDate()

  return `${day}${formatAppend(day)} of ${formatMonth(month)}, ${year}`
}
