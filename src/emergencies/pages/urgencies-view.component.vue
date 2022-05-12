<script setup>
import { PrimeIcons, FilterMatchMode } from "primevue/api";
</script>
<template>
  <pv-datatable
    ref="dt"
    v-model:selection="selection"
    :value="data"
    data-key="id"
    :filters="filters"
    :paginator="true"
    paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rows="10"
    :rows-per-page-options="[5, 10, 15]"
    current-page-report-template="Showing {first} to {last} of {totalRecords} urgencies"
    responsive-layout="scroll">
    <Column selection-mode="multiple" :exportable="false"/>
    <Column field="id" header="ID" :sortable="true"/>
    <Column field="title" header="Title" :sortable="true"/>
    <Column field="summary" header="Summary" :sortable="true"/>
    <Column field="latitude" header="Latitude" :sortable="true"/>
    <Column field="longitude" header="Longitude" :sortable="true"/>
    <Column field="reportedAt" header="ReportedAt" :sortable="true">
      <template #body="props">

      </template>
    </Column>
    <column :exportable="false">
      <template #body="props">
        <pv-button>
          :icon="PrimeIcons.PENCIL"
          class="p-button-rounded p-button-text"
          @click=""
        </pv-button>
        <pv-button>

        </pv-button>
      </template>
    </column>


  </pv-datatable>
</template>




<style scoped>

</style>