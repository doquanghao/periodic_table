import 'package:flutter/material.dart';
import 'package:model_viewer_plus/model_viewer_plus.dart';

class Model3DPage extends StatelessWidget {
  final String modelLink;

  const Model3DPage({Key? key, required this.modelLink}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Mô hình 3D"),
      ),
      body: ModelViewer(
        src: modelLink,
        alt: "A 3D model of an astronaut",
        ar: true,
        autoRotate: true,
        cameraControls: true,
      ),
    );
  }
}
