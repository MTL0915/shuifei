<template>
  <el-card class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增水肥机' : '更新水肥机'"
      :visible.sync="isShow"
    >
      <!-- 表格S -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="主设备">
          <el-select v-model="form.firstEquipment" placeholder="请选择主设备">
            <el-option label="SF123" value="shanghai"></el-option>
            <el-option label="SF456" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="副设备">
          <el-select v-model="form.secondEquipment" placeholder="请选择副设备">
            <el-option label="PK123" value="shanghai"></el-option>
            <el-option label="PK456" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="传感器">
          <el-cascader
            :options="options"
            :props="{ multiple: true }"
            clearable>
          </el-cascader>
        </el-form-item>
        <el-form-item label="摄像头">
          <el-select v-model="form.camera" placeholder="请选择摄像头">
            <el-option label="机枪01" value="shanghai"></el-option>
            <el-option label="机枪02" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- 表格E -->

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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column fixed prop="name" label="名称" sortable>
        </el-table-column>
        <el-table-column
          prop="style"
          label="水肥系统样式"
          sortable
        ></el-table-column>
        <el-table-column
          prop="firstEquipment"
          label="主设备"
          sortable
        ></el-table-column>
        <el-table-column
          prop="secondEquipment"
          label="副设备"
          sortable
        >
        </el-table-column>
        <el-table-column prop="sensor" label="传感器" sortable>
        </el-table-column>
        <el-table-column
          prop="camera"
          label="枪机"
          sortable
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleLook(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="handleEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  methods: {
    handleLook(row) {
      console.log(row);
      this.$router.push({
        path: "/bigScreen",
        query: {
          row: JSON.stringify(row),
        },
      });
    },
    handleEdit(row) {
      console.log(row);
      this.isShow = true;
      this.operateType = "updata";
      this.form = {
        name: row.name,
        style: row.style,
        firstEquipment: row.firstEquipment,
        secondEquipment: row.secondEquipment,
        sensor: row.sensor,
        camera: row.camera,
      };
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.form = {
        name: '',
        firstEquipment: "",
        secondEquipment: "",
        sensor: "",
        camera: "",
      }
    },
    onSubmit() {
      console.log('submit!');
    }
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      form: {
        name: '',
        firstEquipment: "",
        secondEquipment: "",
        sensor: "",
        camera: "",
      },
      options: [
        {
          value: 'ziyuan1',
          label: '资源1',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ],
      tableData: [
        {
          id: "00001",
          name: "水肥01",
          style: "旁路式",
          firstEquipment: "PK01B-2110019",
          secondEquipment: "PK01B-2111020",
          sensor: "PC01B-2110019",
          camera: "摄像头01",
        },
        {
          id: "00002",
          name: "水肥02",
          style: "旁路式",
          firstEquipment: "PK01B-2110014",
          secondEquipment: "PK01B-2111020",
          sensor: "PC01B-2110014",
          camera: "摄像头02",
        },
      ],
      operateForm: {
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
.manage {
  line-height: normal;
}
.manage-header {
  height: 60px;
}
.header-row {
  height: 100%;
  text-align: left;
}
.manage-body {
}
</style>
