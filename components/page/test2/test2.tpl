<div id="demo">
    <button v-disable="disabled">
        {{disabled ? 'Disabled' : 'Submit'}}
    </button>
    <button v-on="click: disabled = !disabled">toggle</button>
</div>