function Filter() {
  return (
    <form action="#">
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>

      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>

      <label>
        <input class="with-gap" name="group1" type="radio" />
        <span>Green</span>
      </label>

      <label>
        <input name="group1" type="radio" disabled="disabled" />
        <span>Brown</span>
      </label>
    </form>
  )
}

export { Filter }
