<template>
  <Vueform   :columns="{
        container: 12,
          wrapper: 6,
      
      }"  style="margin:40px 200px">
    <TextElement
      name="text"
      placeholder="name"
      :rules="['required', 'min:5', 'max:254']"
      size="sm"
    />
    <TextElement
      name="text_1"
      placeholder="fname"
      size="sm"
      :rules="['required', 'min:4', 'max:254']"
    />
    <TextElement
      name="email"
      input-type="email"
      :rules="['required', 'email']"
      placeholder="email"
      :columns="{
        label: 6,
      }"
      size="sm"
    />
    <PhoneElement
      name="phone"
      :allow-incomplete="true"
      :unmask="true"
      placeholder="phone"
      size="sm"
      :rules="['required']"
    />
    <DateElement
      name="date"
      display-format="MM/DD/YYYY"
      placeholder="data of birth"
      size="sm"
      :rules="['required']"
    />
    <RadiogroupElement
      name="radiogroup"
      :items="['male', 'female', 'trans']"
      :columns="{
        container: 3,
        wrapper: 3,
      }"
      size="sm"
      view="tabs"
      :rules="['required']"
      label="gender"
    />
    <RadiogroupElement
      name="radiogroup_1"
      :items="['single', 'married']"
      :columns="{
        container: 3,
        wrapper: 3,
      }"
      size="sm"
      view="tabs"
      label="married status"
      :rules="['required']"
    />
    <SignatureElement
      name="signature"
      placeholder="Esign"
      :rules="['required']"
      size="sm"
    />
    <ButtonElement
      name="submit"
      :submits="true"
      :columns="{
        container: 6,
      }"
      align="left"
      size="sm"
      button-label="prev"
    />
    <ButtonElement
      name="submit_1"
      :submits="true"
      :columns="{
        container: 6,
      }"
      size="sm"
      :conditions="[
        ['text', 'not_empty'],
        ['text_1', 'not_empty'],
        ['email', 'not_empty'],
        ['phone', 'not_empty'],
        ['date', 'not_empty'],
        ['radiogroup', 'not_empty'],
        ['signature', 'not_empty'],
      ]"
      align="right"
      button-label="next"
    />
  </Vueform>
</template>
