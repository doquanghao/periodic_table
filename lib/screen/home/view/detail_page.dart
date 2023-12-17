import 'package:flutter/material.dart';
import 'package:periodic_table/model/ElementData.dart';
import 'package:periodic_table/screen/home/view/balancer.dart';
import 'package:periodic_table/screen/home/view/model_3d_page.dart';

class DetailPage extends StatelessWidget {
  const DetailPage(this.element, {super.key});

  final ElementData element;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(element.name),
        centerTitle: true,
      ),
      body: Column(
        children: [
          ElevatedButton(
            style: const ButtonStyle(
              backgroundColor: MaterialStatePropertyAll<Color>(Colors.blue),
            ),
            child: const Text('Mô hình 3D',
                style: TextStyle(fontSize: 16.0, color: Colors.white)),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => Model3DPage(modelLink: element.bohrModel3d),
                ),
              );
            },
          ),
          Expanded(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  children: [
                    Row(
                      children: [
                        const Text("Electron: "),
                        Text(element.number.toString()),
                      ],
                    ),
                    Row(
                      children: [
                        const Text("Proton: "),
                        Text(element.number.toString()),
                      ],
                    ),
                    const Divider(),
                    Row(
                      children: [
                        const Text("Số hiệu nguyên tử: "),
                        Text(element.number.toString()),
                      ],
                    ),
                    Row(
                      children: [
                        const Text("Khỗi lượng: "),
                        Text(element.atomicWeight.toString()),
                      ],
                    ),
                    const Divider(),
                    const Text("Tính chất vật lý"),
                    element.status.isNotEmpty
                        ? Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text("Trạng thái: "),
                              Expanded(
                                child: Text(
                                  element.status.toString(),
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.color.isNotEmpty
                        ? Row(
                            children: [
                              const Text("Màu sắc: "),
                              Expanded(
                                child: Text(
                                  element.color.toString(),
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.meltingPoint.isNotEmpty
                        ? Row(
                            children: [
                              const Text("Nhiệt độ sôi: "),
                              Expanded(
                                child: Text(
                                  element.meltingPoint.toString(),
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.meltingTemperature.isNotEmpty
                        ? Row(
                            children: [
                              const Text("Nhiệt độ nóng chảy: "),
                              Expanded(
                                child: Text(
                                  element.meltingTemperature.toString(),
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.otherProperties.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text("Tính chất khác: "),
                                    Padding(
                                      padding: const EdgeInsets.only(left: 24),
                                      child:
                                          Text("- ${element.otherProperties}"),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    const Divider(),
                    const Text("Tính chất hóa học"),
                    element.no_1.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Text(
                                  "- ${element.no_1}",
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.no_2.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Text(
                                  "- ${element.no_2}",
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.no_3.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Text(
                                  "- ${element.no_3}",
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.no_4.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Text(
                                  "- ${element.no_4}",
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                    element.no_5.isNotEmpty
                        ? Row(
                            children: [
                              Expanded(
                                child: Text(
                                  "- ${element.no_5}",
                                  maxLines: null,
                                ),
                              ),
                            ],
                          )
                        : Container(),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
