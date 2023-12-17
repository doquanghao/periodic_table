import 'package:flutter/material.dart';
import 'package:periodic_table/model/ElementData.dart';
import 'package:periodic_table/screen/home/view/detail_page.dart';
import 'package:periodic_table/screen/home/view/table_page.dart';

class ElementTile extends StatelessWidget implements PreferredSizeWidget {
  const ElementTile(this.element, {super.key, this.isLarge = false});

  final ElementData element;
  final bool isLarge;

  @override
  Size get preferredSize => Size.fromHeight(0);

  @override
  Widget build(BuildContext context) {
    final tileText = <Widget>[
      Align(
        alignment: AlignmentDirectional.centerStart,
        child: Text('${element.number}',
            style: const TextStyle(fontSize: 12.0, color: Colors.black)),
      ),
      Text(element.symbol,
          style: const TextStyle(fontSize: 16.0, color: Colors.black,fontWeight:FontWeight.w900)),
      Text(
        element.name,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: const TextStyle(fontSize: 10.0, color: Colors.black),
      ),
      Text(
        element.atomicWeight,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: const TextStyle(fontSize: 10.0, color: Colors.black),
      ),
    ];
    final tile = Container(
      margin: kGutterInset,
      color: Color(int.parse("0xFF${element.colors}")),
      child: RawMaterialButton(
        onPressed: !isLarge
            ? () => Navigator.push(
                context, MaterialPageRoute(builder: (_) => DetailPage(element)))
            : null,
        // fillColor: Colors.grey[800],
        disabledElevation: 10.0,
        padding: kGutterInset * 2.0,
        child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: tileText),
      ),
    );

    return Hero(
      tag: 'hero-${element.symbol}',
      flightShuttleBuilder: (_, anim, __, ___, ____) => ScaleTransition(
          scale: anim.drive(Tween(begin: 1, end: 1.75)), child: tile),
      child: Transform.scale(scale: isLarge ? 1.75 : 1, child: tile),
    );
  }
}
