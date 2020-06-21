export default {
  personStaring: ({ currentPerson }) => {
    const { cast } = currentPerson.credits
    const arr = cast.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
    console.log('CAST', cast)
  },
}
