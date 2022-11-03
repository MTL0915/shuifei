<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增水肥机' : '更新水肥机'"
      :visible.sync="isShow"    
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>

    <div class="manage-header">
      <el-row class="header-row">
        <el-button type="primary" @click="addUser">新增</el-button>
      </el-row>
    </div>

    <div class="manage-body">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="name" label="名称" width="120"> </el-table-column>
        <el-table-column prop="style" label="水肥系统样式" width="150"></el-table-column>
        <el-table-column prop="firstEquipment" label="主设备" width="150"></el-table-column>
        <el-table-column prop="secondEquipment" label="副设备" width="150"> </el-table-column>
        <el-table-column prop="sensor" label="传感器" width="150"> </el-table-column>
        <el-table-column prop="camera" label="枪机" width="150"></el-table-column>
        <el-table-column prop="weather" label="气象站" width="150"></el-table-column>
        <el-table-column prop="instrument" label="墒情仪" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleLook(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import commonForm from '@/components/commonForm.vue'
export default {
  components:{
    commonForm
  },
  methods: {
    handleLook(row) {
      console.log(row);
      this.$router.push({ 
        path: "/bigScreen",
        query: { 
          row: JSON.stringify(row)
        } 
      });
    },
    handleEdit(row) {
      console.log(row);
      this.isShow = true
      this.operateType = 'updata'
      this.operateForm = {
        name: row.name,
        style: row.style,
        firstEquipment: row.firstEquipment,
        secondEquipment: row.secondEquipment,
        sensor: row.sensor,
        camera: row.camera,
        weather: row.weather,
        instrument: row.instrument,
      }
    },
    addUser(){
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: "",
        style: "",
        firstEquipment: "",
        secondEquipment: "",
        sensor: "",
        camera: "",
        weather: "",
        instrument: "",
      }
    },
  },
  data() {
    return {
      operateType:'add',
      isShow:false,
      tableData: [
        {
          id: "00001",
          name: "水肥01",
          style: "旁路式",
          firstEquipment: "PK01B-2110019",
          secondEquipment: "PK01B-2111020",
          sensor: "PC01B-2110019",
          camera: "摄像头01",
          weather: "广州气象台",
          instrument: "墒情仪01",
        },
        {
          id: "00002",
          name: "水肥02",
          style: "旁路式",
          firstEquipment: "PK01B-2110014",
          secondEquipment: "PK01B-2111020",
          sensor: "PC01B-2110014",
          camera: "摄像头02",
          weather: "广州气象台",
          instrument: "墒情仪02",
        },
      ],
      operateFormLabel: [
        {
          model:'name',
          label:'名称',
          type:'input'
        },
        {
          model:'style',
          label:'水肥系统样式',
          type:'select',
          opts:[
            {
              label:'旁路式',
              value:0
            },
            {
              label:'在线式',
              value:1
            }
          ]
        },
        {
          model:'firstEquipment',
          label:'主设备',
          type:'select',
          opts:[
            {
              label:'PK01B-2110019',
              value:0
            },
            {
              label:'PK01B-1234567',
              value:1
            }
          ]
        },
        {
          model:'secondEquipment',
          label:'副设备',
          type:'select',
          opts:[
            {
              label:'PK01B-2111020',
              value:0
            },
            {
              label:'PK01B-6666666',
              value:1
            }
          ]
        },
        {
          model:'sensor',
          label:'传感器',
          type:'select',
          opts:[
            {
              label:'PC01B-2111019',
              value:0
            },
            {
              label:'PC01B-6666666',
              value:1
            }
          ]
        },
        {
          model:'camera',
          label:'枪机',
          type:'select',
          opts:[
            {
              label:'摄像头01',
              value:0
            },
            {
              label:'摄像头02',
              value:1
            }
          ]
        },
        {
          model:'weather',
          label:'气象站',
          type:'select',
          opts:[
            {
              label:'广东气象台',
              value:0
            },
            {
              label:'广州气象台',
              value:1
            }
          ]
        },
        {
          model:'instrument',
          label:'墒情仪',
          type:'select',
          opts:[
            {
              label:'墒情仪01',
              value:0
            },
            {
              label:'墒情仪02',
              value:1
            }
          ]
        },
      ],
      operateForm:{
        name: "",
        style: "",
        firstEquipment: "",
        secondEquipment: "",
        sensor: "",
        camera: "",
        weather: "",
        instrument: "",
      },
    };
  },
};
</script>

<style>
.manage{
  line-height: normal;
}
.manage-header{
  height: 60px;
}
.header-row{
  height: 100%;
  text-align: left;
}
.manage-body{
  
}
</style>
