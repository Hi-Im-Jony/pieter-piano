<template>
  <div id="about-container">
    <div id="background-color"></div>
    <div id="about">
      <div data-aos="fade-up">
        <h1 id="about-title">
          Allow Me To Introduce Myself
        </h1>
      </div>

      <div class="row">
        <div data-aos="fade-up">
          <img id="selfie" src="../assets/images/selfie.png" alt="" />
        </div>

        <div class="text-container" data-aos="fade-up">
          <p class="text">
            Hello there, my name is Pieter Louw, and I am a professional piano
            teacher.
            <br />
            <br />
            I hold a Bachelor of Arts in Music from UWC, where I studied piano
            with Cherry Oliver and Professor F Larey. I have over thirty years
            of experience teaching music. Before I moved to Ireland in 2002, I
            was a Secondary School Teacher for fourteen years in South Africa,
            where I taught Music as an examination subject.
            <br />
            <br />
            I was also a music teacher at William Bradford College, in Earl
            Shilton, before finally settling down and becoming a full-time piano
            teacher, as it is what I love most! It is honestly such a joy to
            teach others the art of piano playing, and it is a challenge I am
            more than willing to accept! It is my passion to pass on this great
            skill to others, and I only wish to bring the best out of my
            students.
            <br />
            I love playing to their strengths, but I am also determined to see
            them improve.
          </p>
        </div>
      </div>

      <div id="row-2" class="row">
        <div class="text-container" data-aos="fade-up">
          <p class="text">
            As a result I have had great success using both the RIAM and TCM
            curricula with an average of eighty-percent distinctions over the
            years as well as numerous high achiever awards. I strive to teach
            theory as part of each lesson as it forms a very important basis for
            the understanding and subsequent enjoyment of music.
            <br />
            <br />
            I encourage my pupils to enter for the RIAM Theory examination where
            we have been able to maintain a 100 percent pass rate thus far. I
            enjoy teaching from beginners to advanced level so feel free to
            contact me if you are ready to experience the joy of learning to
            play the piano with a master teacher.
          </p>
        </div>
        <div data-aos="fade-up">
          <img id="fam-pic" src="../assets/images/Fam-photo.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div id="btn-container">
      <v-btn href="/testimonials" id="custom-btn">
        Testimonials
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about-container {
  background: rgb(29, 27, 27);
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#about {
  width: 70%;
  border-width: 1px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px 0px 40px;
  position: relative;
  bottom: 25vh;
}
#background-color {
  background: rgb(39, 38, 38);
  height: 48vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
}
#about-title {
  margin: 20px;
  position: relative;
  bottom: 5vh;
}
.row {
  display: flex;
  width: 100%;
  align-items: center;
  margin: 40px;
}
#fam-pic {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 20px;
  box-shadow: 0px 0px 5px 1px black;
}
#selfie {
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 5px 1px black;
}
.text-container {
  width: 70%;
}
.text {
  text-align: center;
  font-size: 20px;
  margin: 20px;
}

#btn-container {
  position: absolute;
  bottom: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}
#custom-btn {
  border: solid rgb(245, 245, 237) !important;
  color: rgb(245, 245, 237) !important;
  background: transparent;
  font-size: 20px !important;
}
</style>
