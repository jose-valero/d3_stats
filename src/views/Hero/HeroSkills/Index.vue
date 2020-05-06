<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />

    <b-nav pills small>
      <b-nav-item
        class="font-diablo bg-secondary rounded mx-1"
        :active="!isPassiveSkillsActive"
        @click="changeComponent('ActiveSkills')"
      >ACTIVE</b-nav-item>
      <b-nav-item
        class="font-diablo bg-secondary rounded"
        :active="isPassiveSkillsActive"
        @click="changeComponent('PassiveSkills')"
      >PASSIVE</b-nav-item>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'HeroSkills',
  components: {
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills'),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  computed: {
    // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
    componentProps () {
      return this.activeComponent === 'ActiveSkills'
        ? this.skills.active
        : this.skills.passive
    },
    // Nos dice si el componente "HabilidadesPasivas" está activo o no
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>
