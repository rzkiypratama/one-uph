import { Divider, Form, Select, Button, message } from "antd";
import { useState, type FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RightOutlined } from "@ant-design/icons";

const { Option } = Select;

interface IntakeYearProps {

}

const IntakeYear: FC<IntakeYearProps> = ({  }) => {
  const [form] = Form.useForm(); // Use a single form instance
  const [activeTab, setActiveTab] = useState("1");
  const router = useRouter();

  const handleTabChange = (key: string) => {
    if (activeTab !== key) {
      setActiveTab(key);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validasi semua field form
      const values = await form.validateFields();

      // Jika validasi sukses, tampilkan hasilnya di console
      console.log("Form values: ", values);

      // Tampilkan notifikasi berhasil
      message.success("Form submitted successfully!");

      // Reset form setelah submit (opsional)
      form.resetFields();

      // Redirect ke route baru setelah submit
      router.push("/dashboard?step=personalInformation");
    } catch (error) {
      // Jika ada error saat validasi, tampilkan error
      console.log("Form validation failed:", error);
    //   router.push("/dashboard?step=personalInformation");
      message.error("Please fill in the required fields.");
    }
  };

  return (
    <div>
      <div className="flex gap-5 max-w-max">
        <div
          className={`flex items-center gap-3 mb-3 cursor-pointer ${
            activeTab === "1" ? "border-b-2 pb-3" : ""
          }`}
          onClick={() => handleTabChange("1")}
        >
          <Image
            src="/assets/personalinformation.png"
            alt="Intake Year"
            width={45}
            height={45}
          />
          <span>
            <p className="text-lg font-semibold text-header-color">
              Personal Background 01
            </p>
            <p className="italic text-sm text-accent-color">
              your background information
            </p>
          </span>
        </div>
      </div>

      {activeTab === "1" && (
        <Form layout="vertical" form={form} className="grid grid-cols-2 gap-5 w-2/3">
          {/* Form fields */}
          <Form.Item
            label="Intake Year"
            name="intakeYear"
            rules={[{ required: true, message: "Please select your intake year" }]}
          >
            <Select placeholder="Select intake year" variant="borderless" 
            style={{
            border: "none",
            borderBottom: "2px solid #98989844",
            }}>
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
              <Option value="2022">2022</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Campus"
            name="campus"
            rules={[{ required: true, message: "Please select your campus" }]}
          >
            <Select placeholder="Select campus" variant="borderless"
            style={{
                border: "none",
                borderBottom: "2px solid #98989844",
                }}
            >
              <Option value="lippoVillage">Lippo Village Campus</Option>
              <Option value="medanCampus">Medan Campus</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Category of Study"
            name="categoryOfStudy"
            rules={[{ required: true, message: "Please select your category of study" }]}
          >
            <Select placeholder="Select category of study" variant="borderless"
            style={{
                border: "none",
                borderBottom: "2px solid #98989844",
                }}
            >
              <Option value="undergraduate">Undergraduate (S1)</Option>
              <Option value="postgraduate">Postgraduate (S2)</Option>
            </Select>
          </Form.Item>

          {/* Tombol Submit */}
          <div className="col-span-2">
            <Button
            danger
            size="large"
            className="rounded-none"
            type="primary"
            onClick={handleSubmit} // Memanggil fungsi handleSubmit saat tombol diklik
            >
              Save Data & Continue <RightOutlined />
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default IntakeYear;
