<template>
  <div class="stats">
    <div>
      <img :src="ScoreIcon" /><span class="stat">{{ player.score }}</span>
    </div>
    <div>
      <img :src="GoalIcon" /><span class="stat">{{ player.goals }}</span>
    </div>
    <div>
      <img :src="AssistIcon" /><span class="stat">{{ player.assists }}</span>
    </div>
    <div>
      <img :src="SaveIcon" /><span class="stat">{{ player.saves }}</span>
    </div>
    <div>
      <img :src="ShotIcon" /><span class="stat">{{ player.shots }}</span>
    </div>
  </div>
</template>

<script>
import ShotIcon from "../static/shot.svg";
import ScoreIcon from "../static/scorev2.svg";
import SaveIcon from "../static/save.svg";
import GoalIcon from "../static/goal.svg";
import AssistIcon from "../static/assist.svg";

export default {
  props: ["player"],
  data: () => ({
    ShotIcon,
    ScoreIcon,
    SaveIcon,
    GoalIcon,
    AssistIcon,
  }),
};
</script>

<style lang="scss">
.stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /*font-size: 36px;*/

  * {
    height: inherit;
    object-fit: contain;
  }
}
</style>
