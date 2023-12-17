import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:periodic_table/model/ElementData.dart';
import 'package:periodic_table/screen/home/controllers/home_controller.dart';
import 'package:periodic_table/screen/home/view/balancer.dart';
import 'package:periodic_table/screen/home/view/element_tile.dart';

const kRowCount = 10;
const kContentSize = 100.0;
const kGutterWidth = 2.0;

const kGutterInset = EdgeInsets.all(kGutterWidth);

class TablePage extends GetView<HomeController> {
  const TablePage({super.key});

  @override
  Widget build(BuildContext context) {
    controller.getListElementData();
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bảng tuần hoàn hóa học'),
        centerTitle: true,
      ),
      body: Obx(
        () => Center(child: _buildTable(controller.listElementData, context)),
      ),
    );
  }

  Widget _buildTable(List<ElementData?> elements, BuildContext context) {
    final tiles = elements
        .map((element) => element != null
            ? ElementTile(element)
            : Container(color: Colors.white, margin: kGutterInset))
        .toList();

    return Column(
      children: [
        ElevatedButton(
          style: const ButtonStyle(
            backgroundColor: MaterialStatePropertyAll<Color>(Colors.blue),
          ),
          child: const Text('Cân bằng phương trình',
              style: TextStyle(fontSize: 16.0, color: Colors.white)),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) =>Balancer(),
              ),
            );
          },
        ),
        Expanded(
          child: ScrollConfiguration(
            behavior: ScrollConfiguration.of(context).copyWith(dragDevices: {
              PointerDeviceKind.touch,
              PointerDeviceKind.mouse,
            }),
            child: SingleChildScrollView(
              child: SizedBox(
                height: kRowCount * (kContentSize + (kGutterWidth * 2)),
                child: Padding(
                  padding: const EdgeInsets.only(left: 24, right: 24, bottom: 24),
                  child: GridView.count(
                    shrinkWrap: true,
                    primary: false,
                    crossAxisCount: kRowCount,
                    scrollDirection: Axis.horizontal,
                    children: tiles,
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
